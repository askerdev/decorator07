/* eslint-disable react-hooks/rules-of-hooks */
import { Dispatch, SetStateAction } from "react";
import { TabKey, tabs } from "./tabs";
import { cn } from "@/utils";
import { v4 as uuid } from "uuid";

type Props = {
  current: TabKey;
  setCurrent: Dispatch<SetStateAction<TabKey>>;
};

export const Panel = ({ current, setCurrent }: Props) => (
  <>
    <div className="hidden py-8 lg:block">
      <ul className="flex w-full max-w-screen-desktop">
        {(Object.keys(tabs) as TabKey[]).map((key) => (
          <li
            className={cn(
              "cursor-pointer border-b pb-4 text-xl font-semibold md:px-8 xl:px-12",
              {
                "border-b-black text-black": current === key,
                "border-b-gray-200 text-gray-400": current !== key,
              },
            )}
            key={uuid()}
            onClick={() => setCurrent(key)}
          >
            {tabs[key]}
          </li>
        ))}
      </ul>
    </div>
    <div className="relative w-full max-w-[620px] lg:hidden">
      <select
        value={current}
        onChange={(e) => setCurrent(e.target.value as any)}
        className="w-full appearance-none rounded-none border border-black bg-white px-5 py-4 text-left font-semibold"
      >
        {(Object.keys(tabs) as TabKey[]).map((key) => (
          <option key={uuid()} value={key}>
            {tabs[key]}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 h-0 w-0 border-x-[4px] border-t-[5px] border-black border-x-transparent" />
    </div>
  </>
);
