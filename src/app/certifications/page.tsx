import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Certifications } from "@/components/Certifications";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Mehedi Hasan",
  description:
    "Mehedi Hasan is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function CertificationsPage() {
  return (
    <Container>
      <span className="text-4xl">📜</span>
      <Heading className="font-black mb-10">Certifications</Heading>

      <Certifications />
    </Container>
  );
}
