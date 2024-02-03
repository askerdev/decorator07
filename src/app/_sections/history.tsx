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
          <Dialog.Root>
            <Dialog.Trigger className="w-max rounded-[180px] bg-[#D1DCCE] px-4 py-3 text-base font-semibold text-black shadow-[0px_0px_15px_0px_#E6E6E6] md:px-8 md:py-4 md:text-xl">
              Смотреть визуализацию для Аси
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed left-0 top-0 z-50 h-screen w-full bg-black bg-opacity-30" />
              <Dialog.Close className="pointer-events-auto fixed right-4 top-4 z-[60]">
                <svg
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                >
                  <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                </svg>
              </Dialog.Close>
              <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
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
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
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
