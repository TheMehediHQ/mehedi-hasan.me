"use client";

import { useCallback } from "react";

export function useHashNavigation(containerRef?: React.RefObject<HTMLElement | null>) {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const targetContainer = containerRef?.current;
    if (targetContainer) {
      const elementPosition = element.offsetTop;
      const scrollTop = targetContainer.scrollTop;
      const offsetPosition = elementPosition - scrollTop;

      targetContainer.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      const headerOffset = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [containerRef]);

  return { scrollToSection };
}
