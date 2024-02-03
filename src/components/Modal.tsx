import * as Dialog from "@radix-ui/react-dialog";
import { Dispatch, SetStateAction } from "react";
import { Input } from "./Input";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Modal = ({ open, setOpen }: Props) => (
  <Dialog.Root open={open} onOpenChange={(open) => setOpen(open)}>
    <Dialog.Portal>
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
      <Dialog.Overlay className="fixed left-0 top-0 z-50 h-screen w-full bg-black bg-opacity-30" />

      <Dialog.Content className="fixed left-1/2 top-0 z-50 flex h-[474px] w-full max-w-[560px] -translate-x-1/2 translate-y-1/2 flex-col items-center justify-center gap-6 bg-white p-8 text-center sm:p-11">
        <div className="itmes-center flex flex-col gap-3">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Оставьте ваши контакты
          </h2>
          <p className="text-[12px] sm:text-base">
            Мы вам перезвоним и уточним все детали
          </p>
        </div>
        <form className="flex w-full flex-col gap-4">
          <Input placeholder="Имя" />
          <Input placeholder="Телефон" />
          <button className="w-full rounded-md bg-[#1E1E1E] px-14 py-3 text-center font-bold text-white">
            Отправить
          </button>
        </form>
        <p className="text-[12px] font-light text-black sm:text-base">
          Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
