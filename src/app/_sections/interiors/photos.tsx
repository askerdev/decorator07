/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { PropsWithChildren } from "react";
import { TabKey, TabPhotos } from "./tabs";
import { v4 as uuid } from "uuid";

export const Single = ({
  img,
  children,
}: { img: string } & PropsWithChildren) => (
  <div className="flex flex-col items-start gap-4 lg:flex-row lg:justify-between">
    <div className="relative h-[150px] w-[270px] rounded-xl sm:h-[276px] sm:w-[492px] xl:h-[435px] xl:w-[764px]">
      <img
        src={img}
        className="absolute left-0 top-0 z-10 h-[150px] w-[270px] rounded-xl sm:h-[276px] sm:w-[492px] xl:h-[435px] xl:w-[764px]"
        alt="interier photo"
      />
      <img
        src="/images/bush.png"
        className="absolute bottom-0 right-0 h-[75px] w-[75px] translate-x-1/3 translate-y-1/3 sm:h-[120px] sm:w-[120px] xl:h-[240px] xl:w-[240px]"
        alt="bush"
      />
    </div>
    <p className="max-w-[328px] text-left md:text-xl">{children}</p>
  </div>
);

export type Image = {
  src: string;
  description: string;
};

export const Grid = ({ imgs }: { imgs: Image[] }) => (
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10">
    {imgs.map(({ src, description }, index) => (
      <div key={uuid()} className="flex flex-col items-start gap-4">
        <div className="relative h-[150px] w-[270px] rounded-xl sm:h-[225px] sm:w-[400px] 2xl:h-[318px] 2xl:w-[560px]">
          <img
            src={src}
            className="absolute left-0 top-0 z-10 h-[150px] w-[270px] rounded-xl object-cover sm:h-[225px] sm:w-[400px] 2xl:h-[318px] 2xl:w-[560px]"
            alt="interier photo"
          />
          {index % 2 !== 0 ? (
            <img
              src="/images/bush.png"
              className="absolute bottom-0 right-0 h-[75px] w-[75px] translate-x-1/3 translate-y-1/3 sm:h-[120px] sm:w-[120px] 2xl:h-[180px] 2xl:w-[180px]"
              alt="bush"
            />
          ) : null}
        </div>
        <p className="max-w-[428px] text-left md:text-xl">{description}</p>
      </div>
    ))}
  </div>
);

export const Row = ({ imgs }: { imgs: string[] }) => (
  <div className="relative flex max-w-[100vw] columns-2 flex-wrap justify-center gap-3 lg:gap-5">
    {imgs.map((src) => (
      <img
        className="z-10 h-[207px] w-[145px] rounded-xl sm:h-[319px] sm:w-[224px] 2xl:h-[397px] 2xl:w-[280px]"
        key={uuid()}
        src={src}
        alt="interior"
      />
    ))}
    <img
      src="/images/bush.png"
      className="absolute left-1/2 top-1/2 h-[75px] w-[75px] -translate-x-1/2 -translate-y-1/2 sm:h-[120px] sm:w-[120px] md:bottom-0 md:translate-y-1/2 2xl:h-[180px] 2xl:w-[180px]"
      alt="bush"
    />
  </div>
);

export const Photos = ({ current }: { current: TabKey }) => (
  <>{TabPhotos[current]}</>
);
