import { Container } from "@/components/Container";
import { Wave } from "@/components/Wave";

export const QuestionsSection = () => (
  <section className="relative h-[500px] w-full bg-[#D1DCCEE5]">
    <div className="absolute top-0 w-[100vw] -scale-y-100 overflow-hidden">
      <Wave />
    </div>
    <Container></Container>
    <div className="absolute bottom-0 w-[100vw] overflow-hidden">
      <Wave pathProps={{ className: "fill-[#9BB395]" }} />
    </div>
  </section>
);
