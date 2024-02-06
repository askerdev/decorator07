import { cn } from "@/utils";
import { ComponentProps, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

export const Input = ({
  className,
  placeholder,
  id: propsId,
  ...props
}: ComponentProps<"input">) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const id = propsId || uuid();

  return (
    <div className="relative w-full">
      <input
        ref={ref}
        id={id}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "w-full border-b border-gray-300 px-2 pb-2 pt-4 outline-none",
          className,
        )}
        autoComplete="off"
        {...props}
      />
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute bottom-3 left-2 text-gray-300 transition-all duration-300",
          {
            "-translate-x-2 -translate-y-4 scale-75":
              isFocused || ref?.current?.value.trim(),
          },
        )}
      >
        {placeholder}
      </label>
    </div>
  );
};
