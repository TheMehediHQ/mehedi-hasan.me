"use client";

import SectionTitle from "@/components/ui/SectionTitle";

export default function GithubSection() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="GitHub Activity"
          subtitle=""
        />

        <div className="mt-6 lg:mt-10 overflow-x-auto">
          <div className="min-w-[700px] flex justify-center">
            <img
              src="https://ghchart.rshah.org/themehedihq?bg_color=000000&color=FFFFFF&line=469600&point=FFFFFF"
              alt="GitHub contribution graph"
              className="w-full max-w-4xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}