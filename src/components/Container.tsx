import { cn } from "@/utils";
import { ComponentProps } from "react";

export const Container = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex w-full max-w-screen-desktop flex-col items-center",
      className,
    )}
    {...props}
  />
);
