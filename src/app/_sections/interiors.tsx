import { Container } from "@/components/Container";
import { Wave } from "@/components/Wave";

export const InteriorsSection = () => (
  <section id="interiors" className="relative h-[500px] w-full bg-[#FAFAFA]">
    <div className="absolute top-0 w-[100vw] -scale-y-100 overflow-hidden">
      <Wave />
    </div>
    <Container></Container>
  </section>
);
