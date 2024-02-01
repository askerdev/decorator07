import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Wave } from "@/components/Wave";

export const MainSection = () => (
  <section className="relative w-full bg-[url('/images/hero_background.png')] bg-cover bg-center bg-no-repeat">
    <div className="flex h-full w-full flex-col items-center bg-[linear-gradient(to_bottom,rgba(32,36,31,0.8),rgba(32,36,31,0.8))]">
      <Container>
        <Header />
        <hr className="hidden h-[2px] w-full bg-white md:block" />
        <div className="flex w-full flex-col items-center gap-8 px-1 pb-[75px] pt-10 text-white md:items-center md:justify-between md:px-5 md:pb-[150px] md:pt-14 lg:flex-row">
          <div className="flex flex-col gap-8">
            <div className="flex max-w-[570px] flex-col gap-3 text-left">
              <h1 className="text-3xl font-semibold lg:text-[55px] lg:leading-[66px]">
                ОДИН САЛОН КАК МИР ДЛЯ ИНТЕРЬЕРА, НАЙДЕТСЯ ВСЕ ПО ТВОЕМУ ПРИМЕРУ
              </h1>
              <p className="text-lg lg:text-xl">
                «Декоратор» — это 15 категорий материалов от керамогранита до
                лепнины, а также помощь дизайнеров, чтобы создать интерьеры
                своей мечты
              </p>
            </div>
            <Button>Заказать звонок</Button>
          </div>
          <PhotoGrid />
        </div>
      </Container>
    </div>
    <div className="absolute -bottom-1 w-[100vw] overflow-hidden">
      <Wave className="-translate-x-[780px] md:translate-x-0" />
    </div>
  </section>
);
