/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/Container";
import { Wave } from "@/components/Wave";
import { cn } from "@/utils";
import { ComponentProps } from "react";

const Review = ({
  author,
  image,
  className,
  children,
  ...props
}: { author: string; image: string } & ComponentProps<"div">) => (
  <div
    className={cn(
      "relative flex w-full max-w-[560px] flex-col justify-between gap-4 rounded-[20px] bg-white p-5 text-black lg:p-[30px] lg:text-lg",
      className,
    )}
    {...props}
  >
    <p>{children}</p>
    <strong className="pr-4 font-bold">{author}</strong>
    <img className="absolute bottom-0 right-0 " src={image} alt="lamp" />
  </div>
);

export const ReviewsSection = () => (
  <section
    id="reviews"
    className="relative w-full bg-[url('/images/reviews.jpeg')]"
  >
    <div className="flex h-full w-full justify-center bg-[linear-gradient(to_bottom,rgba(32,36,31,0.8),rgba(32,36,31,0.8))] pb-[100px]">
      <div className="absolute -top-1 w-[100vw] -scale-y-100 overflow-hidden">
        <Wave pathProps={{ className: "fill-[#FAFAFA]" }} />
      </div>
      <Container>
        <div className="flex w-full flex-col gap-[19px] pb-[110px] pt-[100px] sm:items-center md:pb-[183px] md:pt-[168px] lg:items-start">
          <h2 className="text-[40px] font-bold uppercase text-white">Отзывы</h2>
          <div className="grid grid-cols-1 grid-rows-4 gap-x-10 gap-y-6 lg:grid-cols-2 lg:grid-rows-2">
            <Review
              author="Шокуева Анжела, 48 лет, экономист"
              image="/images/reviews/1.png"
            >
              Если вам нужны не просто материалы для отделки, но и
              профессионализм консультантов, которые в приятной атмосфере
              помогут вам создать такой интерьер, о котором вы даже и не мечтали
              - значит вам в декоратор.
            </Review>
            <Review
              author="Желдашева Альбина, 30 лет, менеджер"
              image="/images/reviews/2.png"
            >
              Трудно сказать, каких трудов бы стоило отремонтировать всю мою
              квартиру, если бы не опыт консультантов салона «Декоратор».
              Ассортимент тоже, конечно же, внес свою лепту - не пришлось искать
              материалы в разных местах.
            </Review>
            <Review
              author="Хачиров Вячеслав, 39 лет, архитектор"
              image="/images/reviews/3.png"
            >
              Этот салон помогает сосредоточиться на конечном результате
              благодаря приятной атмосфере и ответственному отношению
              консультантов. Нашли все, что было необходимо для полного ремонта
              квартиры. Проконсультировали досконально.
            </Review>
            <Review
              author="Дугулубгов Алим, 38 лет, дизайнер"
              image="/images/reviews/4.png"
            >
              Искал что-то эксклюзивное для своих проектов по обустройству жилых
              помещений и нашел их в салоне «Декоратор». Как дизайнер я
              ограничен только своей фантазией, поэтому я бы хотел еще больше
              ассортимента. Но я вижу, что он здесь постоянно расширяется
            </Review>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 w-[100vw] overflow-hidden">
        <Wave />
      </div>
    </div>
  </section>
);
