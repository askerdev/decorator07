import { cn } from "@/utils";
import { ComponentProps, useState } from "react";

export const Input = ({
  className,
  placeholder,
  ...props
}: ComponentProps<"input">) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "w-full border-b border-gray-300 px-2 py-2 outline-none",
          className,
        )}
        autoComplete="off"
        {...props}
      />
      <label
        className={cn(
          "absolute bottom-3 left-2 text-gray-300 transition-all duration-300",
          {
            "-translate-x-2 -translate-y-4 scale-75": isFocused,
          },
        )}
      >
        {placeholder}
      </label>
    </div>
  );
};
