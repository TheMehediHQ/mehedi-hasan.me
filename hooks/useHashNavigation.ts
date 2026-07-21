"use client";

import { useCallback } from "react";

export function useHashNavigation(
  containerRef?: React.RefObject<HTMLElement | null>,
  onScrollEnd?: () => void
) {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const targetContainer = containerRef?.current;

    if (targetContainer) {
      targetContainer.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });

      const detectEnd = () => {
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

        return () => {
          cancelAnimationFrame(rafId);
          clearTimeout(fallbackTimeout);
          targetContainer.removeEventListener("scrollend", handleScrollEndEvent);
        };
      };

      const cleanup = detectEnd();

      return cleanup;
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
