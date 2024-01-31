import { CallPhone } from "@/components/CallPhone";
import { Header } from "@/components/Header";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Wave } from "@/components/Wave";

const Page = () => (
  <>
    <section className="relative w-full bg-[url('/images/hero_background.png')] bg-center">
      <div className="flex h-full w-full flex-col items-center bg-[linear-gradient(to_bottom,rgba(32,36,31,0.8),rgba(32,36,31,0.8))]">
        <Header />
        <hr className="hidden h-[2px] w-full max-w-screen-desktop bg-white md:block" />
        <div className="flex w-full max-w-screen-desktop flex-col items-center gap-8 px-1 pb-[75px] pt-10 text-white md:flex-row md:items-center md:justify-between md:pb-[150px] md:pt-14">
          <div className="flex flex-col gap-8">
            <div className="flex max-w-[570px] flex-col gap-3 text-left">
              <h1 className="text-3xl font-semibold md:text-[55px] md:leading-[66px]">
                ОДИН САЛОН КАК МИР ДЛЯ ИНТЕРЬЕРА, НАЙДЕТСЯ ВСЕ ПО ТВОЕМУ ПРИМЕРУ
              </h1>
              <p className="text-lg md:text-xl">
                «Декоратор» — это 15 категорий материалов от керамогранита до
                лепнины, а также помощь дизайнеров, чтобы создать интерьеры
                своей мечты
              </p>
            </div>
            <CallPhone />
          </div>
          <PhotoGrid />
        </div>
      </div>
      <div className="absolute bottom-0 w-[100vw] overflow-hidden">
        <Wave className="-translate-x-[780px] md:translate-x-0" />
      </div>
    </section>
  </>
);

export default Page;
