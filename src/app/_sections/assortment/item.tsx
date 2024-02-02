/* eslint-disable @next/next/no-img-element */
import { ComponentProps } from "react";
import { TAssortment } from "./assortment";
import { cn } from "@/utils";
import { Button } from "@/components/Button";
import { v4 as uuid } from "uuid";
import { Icons } from "./icons";

type ItemProps = ComponentProps<"div"> & TAssortment;

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
    <Button className="absolute right-3 top-3 bg-white px-6 py-2 text-sm shadow-none">
      Подробнее
    </Button>
    <div className="absolute bottom-0 z-10 flex w-full flex-col gap-3 p-4 text-white md:pb-9 md:pl-6 md:pr-[72px]">
      <p className="flex items-center gap-2 text-sm">
        <span>{Icons.arrowsLight}</span>
        <span>{properties[1].title}</span>
      </p>
      <div className="flex w-full justify-between text-lg font-bold md:text-3xl">
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
      <Button className="absolute right-5 top-5 bg-white px-6 py-2 text-sm shadow-none">
        Подробнее
      </Button>
      <img width={294} className="rounded-xl" src={images[0]} alt={title} />
      <div className="flex flex-col items-start px-2.5">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex flex-col items-start gap-2">
          <p className="flex items-center gap-2 text-xl">
            <span>{Icons.lineDark}</span>
            <span>{properties[0].title}</span>
          </p>
          <p className="flex items-center gap-2 text-xl">
            <span>{Icons.arrowsDark}</span>
            <span>{properties[1].title}</span>
          </p>
          <p className="flex items-center gap-2 text-xl">
            <span>{Icons.calendarDark}</span>
            <span>{properties[2].title}</span>
          </p>
          <p className="flex items-center gap-2 text-xl">
            <span>{Icons.money}</span>
            <span className="font-bold">от {price} ₽</span>
          </p>
        </div>
      </div>
    </div>
  </>
);
