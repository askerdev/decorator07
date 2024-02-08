export * from "./form";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import { cn } from "@/utils";

type Props = {
  rootProps?: Dialog.DialogProps;
  trigger?: JSX.Element;
} & ComponentProps<
  ForwardRefExoticComponent<
    Dialog.DialogContentProps & RefAttributes<HTMLDivElement>
  >
>;

export const Modal = ({
  className,
  trigger,
  rootProps,
  children,
  ...props
}: Props) => (
  <Dialog.Root {...rootProps}>
    {trigger}
    <Dialog.Portal>
      <Dialog.Overlay className="fixed left-0 top-0 z-50 h-screen w-full bg-black bg-opacity-30" />

      <Dialog.Content
        className={cn(
          "fixed left-1/2 top-1/2 z-50 flex h-[100dvh] w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center",
          className,
        )}
        {...props}
      >
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
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
