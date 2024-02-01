import { Container } from "@/components/Container";
import { Wave } from "@/components/Wave";

export const AssortmentSection = () => (
  <section className="relative h-[600px] w-full bg-[rgba(209,220,206,0.90)]">
    <Container></Container>
    <div className="absolute bottom-0 w-[100vw] overflow-hidden">
      <Wave />
    </div>
  </section>
);
