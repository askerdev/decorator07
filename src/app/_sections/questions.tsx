/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Wave } from "@/components/Wave";
import { useFormModal } from "@/state/FormModalContenxt";

export const QuestionsSection = () => {
  const { open } = useFormModal();

  return (
    <section
      id="questions"
      className="relative flex w-full flex-col items-center bg-[#D1DCCEE5] py-[100px]"
    >
      <div className="absolute -top-[1px] flex w-[100vw] -scale-y-100 flex-col items-center overflow-hidden">
        <Wave />
      </div>
      <Container className="px-2 py-8 lg:pt-[56px]">
        <div className="flex flex-col items-center gap-9">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-8">
            <div className="flex flex-col gap-8">
              <h2 className="max-w-[561px] text-center text-2xl font-bold text-black sm:text-4xl lg:text-left xl:text-[42px] xl:leading-[54px]">
                ПОМОЖЕМ С ДИЗАЙНОМ, ПОДБОРОМ МАТЕРИАЛОВ И ЛЮБЫМИ ВОПРОСАМИ
              </h2>
              <Button onClick={open} className="hidden bg-white lg:flex">
                Задать вопрос
              </Button>
            </div>
            <div className="flex gap-6 md:gap-10">
              <div className="flex flex-col items-start gap-5">
                <img
                  className="w-[138px] sm:w-[182px] xl:w-[260px]"
                  src="/images/albina.png"
                  alt="Альбина"
                />
                <div>
                  <h4 className="font-bold sm:text-lg">Альбина</h4>
                  <p>Консультант-дизайнер</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-5">
                <img
                  className="w-[138px] sm:w-[182px] xl:w-[260px]"
                  src="/images/alima.png"
                  alt="Алима"
                />
                <div>
                  <h4 className="font-bold sm:text-lg">Алима</h4>
                  <p>Консультант-дизайнер</p>
                </div>
              </div>
            </div>
          </div>
          <Button
            onClick={open}
            className="h-[60px] w-[260px] bg-white lg:hidden"
          >
            Задать вопрос
          </Button>
        </div>
      </Container>
      <div className="absolute -bottom-[1px] flex w-[100vw] flex-col items-center overflow-hidden">
        <Wave pathProps={{ className: "fill-[#9BB395]" }} />
      </div>
    </section>
  );
};
