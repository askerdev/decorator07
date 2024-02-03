/* eslint-disable @next/next/no-img-element */
import * as Dialog from "@radix-ui/react-dialog";
import { Container } from "@/components/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";
import { v4 as uuid } from "uuid";
import { Modal } from "@/components/Modal";

const Slides = [
  "/images/history/slider/1.jpg",
  "/images/history/slider/2.jpg",
  "/images/history/slider/3.jpg",
  "/images/history/slider/4.jpg",
];

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
          <Modal
            trigger={
              <Dialog.Trigger className="w-max rounded-[180px] bg-[#D1DCCE] px-4 py-3 text-base font-semibold text-black shadow-[0px_0px_15px_0px_#E6E6E6] md:px-8 md:py-4 md:text-xl">
                Смотреть визуализацию для Аси
              </Dialog.Trigger>
            }
          >
            <Carousel className="w-max max-w-4xl px-6">
              <CarouselContent>
                {Slides.map((src) => (
                  <CarouselItem key={uuid()}>
                    <img src={src} alt="corousel image" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </Modal>
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
