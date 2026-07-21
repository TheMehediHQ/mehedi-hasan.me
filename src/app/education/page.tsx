import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { education } from "@/constants/education";

export default function Education() {
  return (
    <Container>
      <span className="text-4xl">🎓</span>
      <Heading className="font-black">Education</Heading>
      <Paragraph className="max-w-xl mt-4">
        My academic background and educational journey.
      </Paragraph>

      <div className="mt-12 space-y-16">
        {education.map((item, index) => (
          <div
            key={`education-${index}`}
            className="relative border-l border-neutral-200 dark:border-neutral-800 pl-8 pb-8 last:pb-0"
          >
            <div className="absolute left-0 top-0 h-3 w-3 -translate-x-[7px] rounded-full bg-emerald-500 ring-4 ring-white dark:ring-neutral-900" />
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <Heading as="h3" className="text-lg md:text-xl">
                {item.institution}
              </Heading>
              <span className="text-sm text-secondary dark:text-neutral-400 mt-1 md:mt-0">
                {item.date}
              </span>
            </div>
            <Paragraph className="text-base font-semibold text-primary dark:text-neutral-100">
              {item.degree}
            </Paragraph>
            <Paragraph className="mt-2 max-w-2xl">{item.description}</Paragraph>
            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-4 space-y-2">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                    <Paragraph className="text-sm">{highlight}</Paragraph>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
