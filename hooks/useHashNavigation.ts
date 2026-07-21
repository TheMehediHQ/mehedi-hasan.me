"use client";

import { useCallback, useRef } from "react";

export function useHashNavigation(
  containerRef?: React.RefObject<HTMLElement | null>,
  onScrollEnd?: () => void
) {
  const cleanupRef = useRef<(() => void) | null>(null);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const targetContainer = containerRef?.current;

    if (targetContainer) {
      cleanupRef.current?.();

      targetContainer.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });

      let rafId: number;
      let lastTop = targetContainer.scrollTop;
      let stableCount = 0;

      const checkStable = () => {
        const current = targetContainer.scrollTop;
        if (Math.abs(current - lastTop) < 0.5) {
          stableCount++;
          if (stableCount >= 3) {
            onScrollEnd?.();
            return;
          }
        } else {
          stableCount = 0;
          lastTop = current;
        }
        rafId = requestAnimationFrame(checkStable);
      };

      rafId = requestAnimationFrame(checkStable);

      const handleScrollEndEvent = () => {
        cancelAnimationFrame(rafId);
        onScrollEnd?.();
      };

      targetContainer.addEventListener("scrollend", handleScrollEndEvent, { once: true });

      const fallbackTimeout = setTimeout(() => {
        cancelAnimationFrame(rafId);
        onScrollEnd?.();
      }, 1200);

      cleanupRef.current = () => {
        cancelAnimationFrame(rafId);
        clearTimeout(fallbackTimeout);
        targetContainer.removeEventListener("scrollend", handleScrollEndEvent);
      };
    } else {
      const headerOffset = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [containerRef, onScrollEnd]);

  return { scrollToSection };
}
