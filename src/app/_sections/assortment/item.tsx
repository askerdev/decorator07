/* eslint-disable @next/next/no-img-element */
import {
  ComponentProps,
  Dispatch,
  KeyboardEventHandler,
  SetStateAction,
  useState,
} from "react";
import { TAssortment } from "./assortment";
import { cn } from "@/utils";
import { Icons } from "./icons";
import { DialogTrigger } from "@radix-ui/react-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/Button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/Carousel";
import { v4 as uuid } from "uuid";
import { useFormModal } from "@/state/FormModalContenxt";
import { UseEmblaCarouselType } from "embla-carousel-react";

type ItemProps = ComponentProps<"div"> & TAssortment;

const DetailsContentMobile = ({
  images,
  title,
  properties,
  description,
}: Omit<TAssortment, "price">) => {
  const { open } = useFormModal();
  const [expand, setExpand] = useState(false);
  return (
    <div className="relative flex w-[280px] max-w-[850px] flex-col items-center rounded-md bg-white px-4 pb-10 pt-[70px] lg:hidden lg:w-full">
      <Dialog.Close className="pointer-events-auto absolute right-5 top-5 z-[60]">
        <svg
          className="fill-gray-400 active:fill-black"
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

      <h2 className="mb-3 text-center text-xl font-bold">{title}</h2>

      <div className="max-h-[199px] space-y-4 overflow-y-scroll ">
        <div className="space-y-3">
          <p
            className="text-[17px] text-[rgb(87,87,87)]"
            onClick={() => setExpand((prev) => !prev)}
          >
            {expand ? description : `${description.slice(0, 53)}...`}
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 text-[12px]">
          <p className="flex items-center gap-2">
            <span>{Icons.lineDark}</span>
            <span>{properties[0].title}</span>
          </p>
          <p className="flex items-center gap-2">
            <span>{Icons.arrowsDark}</span>
            <span>{properties[1].title}</span>
          </p>
          <p className="flex items-center gap-2">
            <span>{Icons.calendarDark}</span>
            <span>{properties[2].title}</span>
          </p>
        </div>
      </div>
      <Button className="my-8" onClick={open}>
        Оставить заявку
      </Button>

      <Carousel className="w-full">
        <CarouselContent>
          {images.map((src) => (
            <CarouselItem key={uuid()}>
              <img
                className="h-[172px] w-full rounded-xl object-cover object-center"
                src={src}
                alt="corousel image"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </div>
  );
};

const DetailsContentDesktop = ({
  images,
  title,
  properties,
  description,
  setApi,
}: Omit<TAssortment, "price"> & {
  setApi: Dispatch<SetStateAction<UseEmblaCarouselType["1"] | undefined>>;
}) => {
  const { open } = useFormModal();

  return (
    <div className="relative hidden w-full min-w-[850px] items-center gap-10 rounded-md bg-white px-10 py-[60px] lg:flex">
      <Dialog.Close className="pointer-events-auto absolute right-5 top-5 z-[60]">
        <svg
          className="fill-gray-400 active:fill-black"
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

      <Carousel setApi={setApi} className="h-full w-full">
        <CarouselContent>
          {images.map((src) => (
            <CarouselItem key={uuid()}>
              <img
                className="h-[521px] w-[344px] rounded-xl object-cover"
                src={src}
                alt="corousel image"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>

      <div className="flex w-full max-w-[386px] flex-col">
        <h2 className="mb-3 text-left text-5xl font-bold uppercase">{title}</h2>

        <div className="space-y-4 text-xl">
          <div className="space-y-3">
            <p className=" text-[rgb(87,87,87)]">{description}</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="flex items-center gap-2">
              <span>{Icons.lineDark}</span>
              <span>{properties[0].title}</span>
            </p>
            <p className="flex items-center gap-2">
              <span>{Icons.arrowsDark}</span>
              <span>{properties[1].title}</span>
            </p>
            <p className="flex items-center gap-2">
              <span>{Icons.calendarDark}</span>
              <span>{properties[2].title}</span>
            </p>
          </div>
        </div>
        <Button className="my-8" onClick={open}>
          Оставить заявку
        </Button>
      </div>
    </div>
  );
};

const Details = ({
  images,
  title,
  properties,
  description,
}: Omit<TAssortment, "price">) => {
  const [api, setApi] = useState<CarouselApi>();

  const handleKeys: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowLeft") {
      api?.scrollPrev();
    }
    if (e.key === "ArrowRight") {
      api?.scrollNext();
    }
  };

  return (
    <Dialog.Root>
      <DialogTrigger className="absolute right-5 top-5 w-max rounded-[180px] bg-white px-6 py-2 text-sm font-semibold text-black shadow-none">
        Подробнее
      </DialogTrigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed left-0 top-0 z-50 h-screen w-full bg-black bg-opacity-30" />
        <Dialog.Content
          onKeyUp={handleKeys}
          className="fixed left-1/2 top-1/2 z-50 flex w-[280px] max-w-[850px] -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:w-full"
        >
          <DetailsContentMobile
            images={images}
            title={title}
            properties={properties}
            description={description}
          />
          <DetailsContentDesktop
            setApi={setApi}
            images={images}
            title={title}
            properties={properties}
            description={description}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export const AssortmentItemBig = ({
  images,
  title,
  className,
  properties,
  description,
  price,
  ...props
}: ItemProps) => (
  <div
    {...props}
    className={cn(
      "relative flex h-[293px] w-[280px] flex-col items-center md:h-[484px] md:w-[484px]",
      className,
    )}
  >
    <img
      className="absolute h-full w-full rounded-[20px] brightness-50"
      src={images[0]}
      alt={title}
    />
    <Details
      images={images}
      title={title}
      properties={properties}
      description={description}
    />
    <div className="absolute bottom-0 z-10 flex w-full flex-col gap-3 p-4 text-white md:pb-9 md:pl-6 md:pr-[72px]">
      <p className="flex items-center gap-2 text-sm">
        <span>{Icons.arrowsLight}</span>
        <span>{properties[1].title}</span>
      </p>
      <div className="flex w-full flex-col justify-between text-lg font-bold md:flex-row md:text-3xl">
        <span>{title}</span>
        <span>От {price} ₽</span>
      </div>
      <div className="flex w-full justify-between text-sm">
        <p className="flex items-center gap-2 text-sm">
          <span>{Icons.lineLight}</span>
          <span>{properties[0].title}</span>
        </p>
        <p className="flex items-center gap-2 text-sm">
          <span>{Icons.calendarLight}</span>
          <span>{properties[2].title}</span>
        </p>
      </div>
    </div>
  </div>
);

export const AssortmentItemSmall = ({
  images,
  title,
  className,
  properties,
  description,
  price,
  ...props
}: ItemProps) => (
  <>
    <AssortmentItemBig
      className="xl:hidden"
      title={title}
      description={description}
      images={images}
      price={price}
      properties={properties}
    />
    <div
      {...props}
      className={cn(
        "relative hidden h-[484px] w-[314px] flex-col gap-2.5 rounded-lg bg-white p-2.5 xl:flex",
        className,
      )}
    >
      <Details
        images={images}
        title={title}
        properties={properties}
        description={description}
      />
      <img
        className="h-[294px] w-[294px] rounded-xl object-cover"
        src={images[0]}
        alt={title}
      />
      <div className="flex flex-col items-start px-2.5">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex flex-col items-start gap-2 text-base">
          <p className="flex items-center gap-2">
            <span>{Icons.lineDark}</span>
            <span>{properties[0].title}</span>
          </p>
          <p className="flex items-center gap-2">
            <span>{Icons.arrowsDark}</span>
            <span>{properties[1].title}</span>
          </p>
          <p className="flex items-center gap-2">
            <span>{Icons.calendarDark}</span>
            <span>{properties[2].title}</span>
          </p>
          <p className="flex items-center gap-2">
            <span>{Icons.money}</span>
            <span className="font-bold">от {price} ₽</span>
          </p>
        </div>
      </div>
    </div>
  </>
);
