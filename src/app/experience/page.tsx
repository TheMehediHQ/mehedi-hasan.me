import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function Experience() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Experience</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a backend developer with experience building scalable systems.{" "}
        <Highlight>5+ years</Highlight> of building products and web apps.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
