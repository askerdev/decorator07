import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Wave } from "@/components/Wave";
import { useFormModal } from "@/state/FormModalContenxt";

export const MainSection = () => {
  const { open } = useFormModal();

  return (
    <section className="relative flex w-full flex-col items-center bg-[url('/images/hero_background.png')] bg-cover bg-center bg-no-repeat pb-[60px] after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-black after:opacity-60 after:content-[''] lg:pb-0">
      <Container>
        <Header />
        <hr className="z-20 hidden h-[2px] w-full bg-white md:block" />
        <div className="z-20 flex w-full flex-col items-center gap-8 px-1 pb-[75px] pt-10 text-white md:items-center md:justify-between md:px-5 md:pb-[150px] md:pt-14 lg:flex-row">
          <div className="flex flex-col gap-8">
            <div className="flex max-w-[570px] flex-col gap-3 text-left">
              <h1 className="text-3xl font-semibold lg:text-[55px] lg:leading-[66px]">
                ОДИН САЛОН КАК МИР ДЛЯ ИНТЕРЬЕРА, НАЙДЕТСЯ ВСЕ ПО ТВОЕМУ ПРИМЕРУ
              </h1>
              <p className="text-lg lg:text-xl">
                «Декоратор» — это 15 категорий материалов от керамогранита до
                лепнины, а также помощь дизайнеров, чтобы создать интерьеры
                твоей мечты
              </p>
            </div>
            <Button className="z-40 cursor-pointer" onClick={open}>
              Заказать звонок
            </Button>
          </div>
          <PhotoGrid />
        </div>
      </Container>
      <div className="absolute -bottom-1 flex w-[100vw] flex-col items-center overflow-x-hidden">
        <Wave className="z-20 -translate-x-[780px] md:translate-x-0" />
      </div>
    </section>
  );
};
