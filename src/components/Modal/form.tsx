import styles from "./styles.module.css";
import { DOMAttributes, Dispatch, SetStateAction, useState } from "react";

import { Input } from "../Input";
import { z } from "zod";
import { PHONE_REGEXP } from "@/constants/phone";
import { send } from "@/utils/email";
import { Modal } from ".";
import { cn } from "@/utils";

type FormModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const schema = z.object({
  name: z
    .string({
      invalid_type_error: "Должно быть строкой",
      required_error: "Необходимо",
    })
    .min(3, "Минимальная длина 3 символа")
    .max(50, "Максимальная длина 50 символов"),
  phone: z
    .string({
      invalid_type_error: "Должно быть строкой",
      required_error: "Необходимо",
    })
    .regex(
      PHONE_REGEXP,
      "Ваш номер телефона не соотвествует стандарту номеров в России",
    ),
});

export const FormModal = ({ open, setOpen }: FormModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowThank, setIsShowThank] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
  }>({});

  const onSubmit: DOMAttributes<HTMLFormElement>["onSubmit"] = async (e) => {
    e.preventDefault();

    const t = e.target as HTMLFormElement;

    const formData = new FormData(t);

    try {
      const data = schema.parse(Object.fromEntries(formData.entries()));
      setIsLoading(true);
      await send(data);
      setIsLoading(false);
      setIsShowThank(true);
      t.reset();
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach((err) => {
          setErrors((prev) => ({
            [err.path[0].toString()]: err.message,
            ...prev,
          }));
        });
      }
    }
  };

  return (
    <Modal
      rootProps={{
        open,
        onOpenChange: (open) => setOpen(open),
      }}
    >
      <div className="fixed flex h-[474px] w-full max-w-[560px] flex-col items-center justify-center gap-6 bg-white p-8 text-center sm:p-11">
        <div className="itmes-center flex flex-col gap-3">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Оставьте ваши контакты
          </h2>
          <p className="text-[12px] sm:text-base">
            Мы вам перезвоним и уточним все детали
          </p>
        </div>
        {isShowThank ? (
          <div className="w-full bg-emerald-400 px-2 py-5">
            <p className="text-sm text-white md:text-xl">
              Спасибо! Данные успешно отправлены.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
            <div className="flex w-full flex-col gap-1">
              <Input
                disabled={isLoading}
                name="name"
                id="form-input-name"
                className={cn({
                  "border border-red-400": errors?.name,
                })}
                autoComplete="off"
                placeholder="Имя"
              />
              {errors?.name && (
                <label
                  htmlFor="form-input-name"
                  className="text-left text-sm text-red-400"
                >
                  {errors.name}
                </label>
              )}
            </div>
            <div className="flex w-full flex-col gap-1">
              <Input
                disabled={isLoading}
                name="phone"
                id="form-input-phone"
                placeholder="Телефон"
                autoComplete="off"
                className={cn({
                  "border border-red-400": errors?.phone,
                })}
              />
              {errors?.phone && (
                <label
                  htmlFor="form-input-phone"
                  className="text-left text-sm text-red-400"
                >
                  {errors.phone}
                </label>
              )}
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-[#1E1E1E] px-14 py-3 text-center font-bold text-white"
            >
              {isLoading ? (
                <svg
                  width="24"
                  height="24"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g className={styles.spinner}>
                    <circle
                      className={styles.circle}
                      cx="12"
                      cy="12"
                      r="9.5"
                      fill="none"
                      strokeWidth="3"
                    ></circle>
                  </g>
                </svg>
              ) : (
                "Отправить"
              )}
            </button>
          </form>
        )}

        <p className="text-[12px] font-light text-black sm:text-base">
          Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </div>
    </Modal>
  );
};
