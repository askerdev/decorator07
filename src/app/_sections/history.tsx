/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export const HistorySection = () => (
  <section
    id="history"
    className="relative flex w-full flex-col items-center overflow-hidden bg-white"
  >
    <Container className="relative items-center px-2.5 pb-[79px] pt-[45px] md:px-5">
      <div className="flex w-full items-center justify-center xl:justify-between">
        <div className="flex flex-col items-center gap-4 md:gap-8 lg:items-start">
          <h2 className="flex flex-col gap-3 text-3xl font-bold sm:text-5xl">
            <div className="flex items-center gap-3">
              <span className="h-[5px] w-[145px] bg-black md:w-[210px]" />
              ИСТОРИЯ
            </div>
            ОДНОГО ИНТЕРЬЕРА
          </h2>
          <div className="h-[200px] w-[300px] bg-black sm:h-[300px] sm:w-[480px]"></div>
          <img
            className="w-full max-w-[480px] lg:hidden"
            src="/images/history.png"
            alt="history"
          />

          <Button className="px-4 text-base md:px-8 md:py-4 md:text-xl">
            Смотреть визуализацию для Аси
          </Button>
        </div>
        <div className="hidden w-full lg:block">
          <img
            className="w-full object-cover"
            src="/images/history.png"
            alt="history"
          />
        </div>
      </div>
    </Container>
  </section>
);
