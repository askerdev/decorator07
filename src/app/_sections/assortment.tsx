import { Container } from "@/components/Container";
import { Wave } from "@/components/Wave";

export const AssortmentSection = () => (
  <section
    id="assortment"
    className="relative h-[600px] w-full bg-[rgba(209,220,206,0.90)]"
  >
    <div className="absolute -top-[1px] w-[100vw] -scale-y-100 overflow-hidden">
      <Wave />
    </div>
    <Container></Container>
    <div className="absolute bottom-0 w-[100vw] overflow-hidden">
      <Wave />
    </div>
  </section>
);
