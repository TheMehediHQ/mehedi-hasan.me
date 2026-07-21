"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollSpy(sectionIds: string[], enabled: boolean = true) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!enabled) {
      observerRef.current?.disconnect();
      observerRef.current = null;
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((top, current) => {
            return current.boundingClientRect.top < top.boundingClientRect.top
              ? current
              : top;
          });
          setActiveId(topEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-10% 0px -75% 0px",
        threshold: 0,
      }
    );

    elements.forEach((element) => observerRef.current?.observe(element));

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [sectionIds, enabled]);

  return activeId;
}
