"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

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
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    elements.forEach((element) => observerRef.current?.observe(element));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionIds]);

  return activeId;
}
