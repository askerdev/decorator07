"use client";

import { Container } from "@/components/Container";
import { Wave } from "@/components/Wave";
import { Panel } from "./panel";
import { useState } from "react";
import { TabKey } from "./tabs";
import { Photos } from "./photos";

export const InteriorsSection = () => {
  const [current, setCurrent] = useState<TabKey>("1");

  return (
    <section
      id="interiors"
      className="relative flex w-screen flex-col items-center bg-[#FAFAFA] pb-4 lg:pb-20"
    >
      <div className="absolute top-0 flex w-[100vw] -scale-y-100 flex-col items-center overflow-hidden">
        <Wave />
      </div>
      <Container className="px-2 pt-[150px]">
        <div className="flex w-full flex-col items-center gap-5">
          <div className="flex w-full flex-col text-left lg:flex-row lg:items-center lg:gap-[91px]">
            <h2 className="flex flex-col gap-1 text-3xl font-bold sm:text-5xl">
              МНОЖЕСТВО ИНТЕРЬЕРОВ
              <div className="flex items-center gap-3">
                <span className="hidden h-[5px] w-[70px] bg-black lg:block" />
                ОДНО РЕШЕНИЕ
              </div>
            </h2>
            <p className="max-w-[282px] text-lg lg:text-xl">
              3D-визуализация на примере наших клиентов
            </p>
          </div>
          <Panel current={current} setCurrent={setCurrent} />
          <Photos current={current} />
        </div>
      </Container>
    </section>
  );
};
