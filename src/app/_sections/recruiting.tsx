/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Wave } from "@/components/Wave";

export const RecruitingSection = () => (
  <section className="relative flex w-[100vw] justify-center overflow-x-hidden bg-white pb-[157px] pt-[57px] lg:pb-[200px] lg:pt-[100px]">
    <div className="absolute -bottom-[1px] w-[100vw] overflow-hidden">
      <Wave pathProps={{ className: "fill-[#D1DCCEE5]" }} />
    </div>
    <Container className="px-2">
      <div className="flex flex-col items-center gap-6 lg:flex-row xl:gap-16">
        <img
          className="w-full max-w-[389px] lg:max-w-[466px] xl:max-w-[666px]"
          src="/images/recruiting.png"
          alt="recruiting"
        />
        <div className="flex flex-col gap-6">
          <h2 className="flex flex-col gap-1 text-3xl font-bold sm:text-5xl">
            <div className="flex items-center gap-3">
              <span className="h-[5px] w-[30px] bg-black md:w-[50px]" />
              ВЫ ДИЗАЙНЕР,
            </div>
            АРХИТЕКТОР ИЛИ
            <br /> МАСТЕР РЕМОНТА <br /> И ХОТИТЕ С НАМИ
            <div className="flex items-center gap-3">
              РАБОТАТЬ?
              <span className="h-[5px] w-[80px] bg-black md:w-[140px]" />
            </div>
          </h2>
          <p className="max-w-[260px] text-xl lg:text-lg">
            Свяжитесь с нами, а мы сделаем вам предложение
          </p>
          <Button>Задать вопрос</Button>
        </div>
      </div>
    </Container>
  </section>
);
