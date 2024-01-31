import { cn } from "@/utils";
import { ComponentProps } from "react";

export const Button = ({ className, ...props }: ComponentProps<"button">) => (
  <button
    className={cn(
      "w-max rounded-[180px] bg-[#D1DCCE] px-11 py-3 text-xl font-semibold text-black shadow-[0px_0px_15px_0px_#E6E6E6]",
      className,
    )}
    {...props}
  ></button>
);
