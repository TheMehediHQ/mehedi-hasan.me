"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experiences } from "@/constants/experience";

export default function ExperienceSection() {
  return (
    <div className=" px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Experience"
          subtitle=""
        />

       <div className="space-y-6 lg:space-y-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
