import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Wave } from "@/components/Wave";
import { assortment } from "./assortment";

export const AssortmentSection = () => (
  <section
    id="assortment"
    className="relative flex w-full flex-col items-center bg-[rgba(209,220,206,0.90)] py-[100px]"
  >
    <div className="absolute -top-[1px] flex w-[100vw] -scale-y-100 flex-col items-center overflow-hidden">
      <Wave />
    </div>
    <Container className="px-2 pb-16 pt-8 lg:py-[70px]">
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col items-center gap-20 xl:flex-row xl:justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <h2 className="flex flex-col text-2xl font-bold sm:text-5xl">
                ТО ИЗ ЧЕГО
                <br />
                СОЗДАЕТСЯ КРАСОТА
                <div className="flex items-center gap-3">
                  <span className="h-[5px] w-[70px] bg-black lg:w-[160px]" />
                  АССОРТИМЕНТ
                </div>
              </h2>
              <p className="max-w-[500px] text-base text-[rgb(87,87,87)] sm:text-xl">
                По всем материалам, стилям, размерам, цветам и полному
                ассортименту воспользуйтесь консультацией наших дизайнеров
              </p>
            </div>
            <Button className="bg-white">Задать вопрос</Button>
          </div>
          {assortment[0]}
        </div>
        <div className="flex flex-col gap-6 lg:gap-[60px]">
          <div className="flex flex-col items-center gap-6 xl:flex-row xl:justify-center">
            {assortment[1]}
            {assortment[2]}
            {assortment[3]}
          </div>
          <div className="flex flex-col items-center gap-6 xl:flex-row xl:justify-center">
            {assortment[4]}
            {assortment[5]}
            {assortment[6]}
          </div>
          <div className="flex flex-col items-center gap-6 xl:flex-row xl:justify-center">
            {assortment[7]}
            {assortment[8]}
            {assortment[9]}
          </div>
        </div>
      </div>
    </Container>
    <div className="absolute bottom-0 flex w-[100vw] flex-col items-center overflow-hidden">
      <Wave />
    </div>
  </section>
);
