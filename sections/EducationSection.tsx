"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import EducationCard from "@/components/ui/EducationCard";
import { educations } from "@/constants/education";

export default function EducationSection() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Education"
          subtitle=""
        />

        <div className="space-y-4 sm:space-y-6">
          {educations.map((education, index) => (
            <EducationCard
              key={education.id}
              education={education}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}