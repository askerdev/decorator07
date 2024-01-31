/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export const DreamsSection = () => (
  <section className="relative flex w-full flex-col items-center bg-white">
    <Container className="items-center px-2.5 pt-20 md:pb-40">
      <div className="flex w-full flex-col items-center gap-10 md:justify-between xl:flex-row">
        <div className="flex max-w-[442px] flex-col gap-3">
          <h1 className="flex flex-col gap-3 text-3xl font-bold sm:text-5xl">
            ЕСЛИ УЖ МЕЧТАТЬ,
            <div className="flex items-center gap-3">
              <span className="h-[5px] w-[70px] bg-black" />
              ТО В ДЕТАЛЯХ
            </div>
          </h1>
          <p className="max-w-[387px] text-base sm:text-xl">
            Делаем бесплатную 3D-визуализацию. Вам остается только выбрать
            материалы и стиль интерьера. Либо пользоваться рекомендациями нашего
            дизайнера.
          </p>
          <Button className="mt-4 hidden px-8 py-4 shadow-none md:flex">
            Задать вопрос
          </Button>
        </div>

        <div className="relative h-[150px] w-[270px] sm:h-[276px] sm:w-[492px] xl:h-[369px] xl:w-[656px]">
          <img
            src="/images/bush.png"
            className="absolute right-0 top-0 z-20 h-[75px] w-[75px] -translate-y-1/3 translate-x-1/3 sm:h-[120px] sm:w-[120px] xl:h-[160px] xl:w-[160px]"
            alt="bush"
          />
          <img
            src="/images/dreams.png"
            className="absolute left-0 top-0 z-10 h-[150px] w-[270px] sm:h-[276px] sm:w-[492px] xl:h-[369px] xl:w-[656px]"
            alt="dreams"
          />
          <img
            src="/images/bush.png"
            className="absolute bottom-0 left-0 h-[75px] w-[75px] -translate-x-1/3 translate-y-1/3 sm:h-[120px] sm:w-[120px] xl:h-[240px] xl:w-[240px]"
            alt="bush"
          />
        </div>
      </div>
      <Button className="mt-12 shadow-none md:hidden">Задать вопрос</Button>
    </Container>
  </section>
);
