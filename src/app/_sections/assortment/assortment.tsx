import { v4 as uuid } from "uuid";
import { AssortmentItemBig, AssortmentItemSmall } from "./item";

export type Properties = {
  title: string;
};

export type TAssortment = {
  title: string;
  properties: [Properties, Properties, Properties];
  price: number;
  images: string[];
  description: string;
};

export const assortment: JSX.Element[] = [
  // 1 Обои Wallpapers
  <AssortmentItemBig
    key={uuid()}
    title="Обои"
    images={[
      "/images/assortment/wallpapers/1.jpg",
      "/images/assortment/wallpapers/2.jpg",
      "/images/assortment/wallpapers/3.jpg",
      "/images/assortment/wallpapers/4.jpg",
      "/images/assortment/wallpapers/5.jpg",
      "/images/assortment/wallpapers/6.jpg",
      "/images/assortment/wallpapers/7.jpg",
      "/images/assortment/wallpapers/8.jpg",
      "/images/assortment/wallpapers/9.jpg",
      "/images/assortment/wallpapers/10.jpg",
      "/images/assortment/wallpapers/11.jpg",
      "/images/assortment/wallpapers/12.jpg",
      "/images/assortment/wallpapers/13.jpg",
      "/images/assortment/wallpapers/14.jpg",
      "/images/assortment/wallpapers/15.jpg",
    ]}
    price={2500}
    properties={[
      {
        title: "Европейское качество",
      },
      {
        title: "Широкий ассортимент",
      },
      {
        title: "Долгий срок службы",
      },
    ]}
    description="У нас  представлен широкий ассортимент обоев как в наличии на складе,  так и на заказ. Богатая палитра цветов и узоров не оставит никого равнодушным, а благодаря высокому европейскому качеству обои прослужат долго."
  />,
  // 2 Краски paint
  <AssortmentItemBig
    key={uuid()}
    title="Краски"
    images={[
      "/images/assortment/paint/1.jpg",
      "/images/assortment/paint/2.jpg",
      "/images/assortment/paint/3.jpg",
      "/images/assortment/paint/4.jpg",
      "/images/assortment/paint/5.jpg",
      "/images/assortment/paint/6.jpg",
      "/images/assortment/paint/7.jpg",
      "/images/assortment/paint/8.jpg",
      "/images/assortment/paint/9.jpg",
      "/images/assortment/paint/10.jpg",
    ]}
    price={990}
    properties={[
      {
        title: "Гарантия качества",
      },
      {
        title: "Дизайнерская краска Хюгге",
      },
      {
        title: "Краски разного функционала",
      },
    ]}
    description="Краски Dulux европейского бренда и дизайнерская краска Хюгге от российских производителей включают в себя линейку красок разного функционала: для стен, фасадов, полов и лестниц, окон и дверей, радиаторов и заборов и даже подоконников!"
  />,
  // 3 Фреска fresco
  <AssortmentItemSmall
    key={uuid()}
    title="Фреска"
    images={[
      "/images/assortment/fresco/1.jpg",
      "/images/assortment/fresco/2.jpg",
      "/images/assortment/fresco/3.jpg",
      "/images/assortment/fresco/4.jpg",
      "/images/assortment/fresco/5.jpg",
      "/images/assortment/fresco/6.jpg",
      "/images/assortment/fresco/7.jpg",
      "/images/assortment/fresco/8.jpg",
      "/images/assortment/fresco/9.jpg",
      "/images/assortment/fresco/10.jpg",
      "/images/assortment/fresco/11.jpg",
      "/images/assortment/fresco/12.jpg",
    ]}
    price={3500}
    properties={[
      {
        title: "Натуральные материалы",
      },
      {
        title: "Долговечные и износостойкие",
      },
      {
        title: "Придают престиж дому",
      },
    ]}
    description="Это художественное бесшовное полотно, получается путем нанесения декоративной штукатурки на флизелиновое полотно и дорисовывается вручную художниками. Хотите выделить зону за изголовьем кровати , тв зону или обеденную группу- фреска-это отличный вариант.
    "
  />,
  // 4 Керамогранит stoneware
  <AssortmentItemSmall
    key={uuid()}
    title="Керамогранит"
    images={[
      "/images/assortment/stoneware/42420fda2246a0730e22c34ca96ff861.jpg",
      "/images/assortment/stoneware/6f70833854388f059109a55ceae6649c.jpg",
      "/images/assortment/stoneware/b06d4ed34d6a21f4a39b23ae3d3acef3.jpg",
      "/images/assortment/stoneware/c58958c37ca3b7cd1ddb6540512b2994.jpg",
      "/images/assortment/stoneware/f33be7db083bd3887f59760edd4bc2fe.jpeg",
      "/images/assortment/stoneware/7e8dd243a2f946e4227fde38924480d2.jpg",
      "/images/assortment/stoneware/78e432fdf66676edf1ce9fcc76ae7232.jpg",
      "/images/assortment/stoneware/8ab7948be9501e37352a8d4f4fcf7467.jpg",
      "/images/assortment/stoneware/fd5f21a1d6064c796306d07146b6d791.jpg",
    ]}
    price={800}
    properties={[
      {
        title: "Бренд Италон и Colizeum",
      },
      {
        title: "Эстетичный внешний вид",
      },
      {
        title: "Экологичность",
      },
    ]}
    description="Мы предлагаем керамогранит  от брендов  Италон  и Colizeum  от мелко-форматных до крупно-форматных, с высокой степенью износостойкости и разнообразными типами поверхностей: глянцевые, патинированные структурированные и матовые, с разными текстурами : под мрамор, под бетон, с имитацией камня и оникса. Так же в салоне вы можете взять на примерку образцы керамогранита."
  />,
  // 5 Люстры и светильники сhandeliers
  <AssortmentItemSmall
    key={uuid()}
    title="Люстры и светильники"
    images={[
      "/images/assortment/сhandeliers/tild3164-3331-4538-b766-343439343231__odeon.jpg",
      "/images/assortment/сhandeliers/tild6331-6537-4264-b932-333639343731_st_luce2.jpg",
      "/images/assortment/сhandeliers/tild3131-6534-4563-b535-386436646230__2.jpg",
      "/images/assortment/сhandeliers/tild3438-3039-4534-a162-356535323637__3.jpg",
      "/images/assortment/сhandeliers/tild3462-6466-4331-b839-643438613664_st_luce.jpg",
      "/images/assortment/сhandeliers/tild6661-6563-4538-b361-393230643563_photo.jpg",
      "/images/assortment/сhandeliers/tild3866-3862-4463-b539-373265313230_St_Luce7.jpg",
      "/images/assortment/сhandeliers/tild6131-3166-4431-b966-316663386463_ST_LUCE_1.jpg",
    ]}
    price={1500}
    properties={[
      {
        title: "Лучшие европейские бренды",
      },
      {
        title: "Эстетика",
      },
      {
        title: "Долгий срок службы",
      },
    ]}
    description="Люстры от лучших европейских брендов: Майтони, Одеон, Кристалл Люкс, Фаворит, Ньюпорт, Эсте Лючи, Кинк лайт, Лайтстар, Дивинаре в наличии и на заказ. Мы поможем вам подобрать под ваш интерьер самый походящий вариант."
  />,
  // 6 Инженерная доска engineering_board
  <AssortmentItemSmall
    key={uuid()}
    title="Инженерная доска"
    images={[
      "/images/assortment/engineering_board/Exotic_American-Walnut_trad_v2.jpg",
      "/images/assortment/engineering_board/French-Riviere_h.jpg",
      "/images/assortment/engineering_board/Trianon_American-Walnut-Traditional_h.jpg",
      "/images/assortment/engineering_board/Renaissance_white-frost_h.jpg",
      "/images/assortment/engineering_board/Natural_h.jpg",
      "/images/assortment/engineering_board/natural_Country_v2-4.jpg",
      "/images/assortment/engineering_board/Chestnut_Country_v.jpg",
      "/images/assortment/engineering_board/herribone-collection-grey-cashmere-h2-2.jpg",
    ]}
    price={5900}
    properties={[
      {
        title: "Универсальность",
      },
      {
        title: "Экологичность",
      },
      {
        title: "Широкий выбор",
      },
    ]}
    description="В салоне представлена широкая линейка напольных покрытий: Косвик, Эссе и СВМ. Инженерная доска, паркетная доска и ламинат отвечают самым высоким стандартам качества, они  практичны в использовании и очень красивы."
  />,
  // 7 Лепнина stucco_molding
  <AssortmentItemBig
    key={uuid()}
    title="Лепнина"
    images={[
      "/images/assortment/stucco_molding/a879ab091e6e676c89e056d41b47f34f21901683_orac_nick_inspiration_book_2018_2_5b97b397d90fe.jpg",
      "/images/assortment/stucco_molding/ad2c7283cec32dcd1bc62a1b55c9bbb32edb1872_new_classics_heritage_4_5dfa2da652a09.jpg",
      "/images/assortment/stucco_molding/5126128474bcdbf90e5c754c3066d2ab.jpg",
      "/images/assortment/stucco_molding/fbbce5512972c6bbe2c2904ed129fb19.jpg",
      "/images/assortment/stucco_molding/f9025e372e83a44a7d7c6a8511599017.jpg",
      "/images/assortment/stucco_molding/9cf71a0f8aedfab0788ee7eed24e7794.jpg",
    ]}
    price={260}
    properties={[
      {
        title: "Прочность и долговечность",
      },
      {
        title: "Функциональность",
      },
      {
        title: "Индивидуальность",
      },
    ]}
    description="У нас вы можете приобрести карнизы, плинтусы , молдинги и стеновые панели из полиуретана и дюрополимера от Орак Декор, Европласта, Белла Декор. Изделия уже загрунтованы и готовы к покраске. Также вы можете заказать у нас стеновые панели из массива дерева от бренда Эссе в разных оттенках."
  />,
  // 8 Двери Doors
  <AssortmentItemBig
    key={uuid()}
    title="Двери"
    images={[
      "/images/assortment/doors/12rylb3d2oka7ye7n8tig36j7wr9m66n.jpg",
      "/images/assortment/doors/4xta838wp33e0edb47ul1gl7q4opommm.jpg",
      "/images/assortment/doors/cadi6oni3s3wwis3zvg44yybmqjkdhfh.jpg",
      "/images/assortment/doors/btmtkd95laurrpsbi2gxzgvqcpnkqs1j.jpg",
      "/images/assortment/doors/b9m1olfsz6exl25etaw00724xf0rnbi6.jpg",
      "/images/assortment/doors/bz2y982l751q487cyec2zlbc95iq1j6a.jpg",
      "/images/assortment/doors/PS-mini.jpg",
      "/images/assortment/doors/tlucwj0bxhbpkjgvnu8tmn0o2h5n7cp8.jpg",
      "/images/assortment/doors/Razdvizhnaya-dver-DELTA-LINE-Seriya-Slim-Art.jpg",
      "/images/assortment/doors/5g5pvze0k58fx20tvadlux0w5rsq1dzb.jpg",
      "/images/assortment/doors/ajgryzno65083jel7h8kpvm0e7inghbz.jpg",
    ]}
    price={60000}
    properties={[
      {
        title: "Двери скрытого монтажа",
      },
      {
        title: "Широкий ассортимент",
      },
      {
        title: "Высокое качество",
      },
    ]}
    description="Мы являемся дилерами фирмы Миксал, производителя дверей скрытого монтажа и перегородок, а также гардеробных систем , профили и каркас из высококачественного анодированного алюминия, полотна можно заказать из шпона, стекла, окрашенного гипсокартона."
  />,
  // 9 Ароматы для дома.
  <AssortmentItemBig
    key={uuid()}
    title="Ароматы для дома."
    images={[
      "/images/assortment/home_fragrances/gioia-spray-100ml-01-1000x1000.jpg",
      "/images/assortment/home_fragrances/021a4a66a9000771dfe041f00e267cf8-1000x1000.jpg",
      "/images/assortment/home_fragrances/BAOBAB_LIFESTYLE_SS2023-7sm-1000x1000.jpg",
      "/images/assortment/home_fragrances/BAOBAB_PARISmalia_FW2023286sm-1000x1000.jpg",
      "/images/assortment/home_fragrances/d714ac17b7ca16f81ba7e8aa516912ad.jpg",
      "/images/assortment/home_fragrances/totem-feathers-touareg-1000x1000.jpg",
      "/images/assortment/home_fragrances/Iris-1000x1000.jpg",
      "/images/assortment/home_fragrances/1d6677fcb9a04189bde3a7a804132f83.jpg",
      "/images/assortment/home_fragrances/266c8e5b99f6ac265ce8585938810ff1.jpg",
      "/images/assortment/home_fragrances/8be05a327e6d718c1dbdd3fbe91f15ab.jpg",
    ]}
    price={3600}
    properties={[
      {
        title: "Эксклюзивные европейские ароматы",
      },
      {
        title: "Высокий срок службы",
      },
      {
        title: "Эстетическая привлекательность",
      },
    ]}
    description="В нашем салоне вы можете приобрести  эксклюзивные европейские арматы для дома Culti Milano, Baobab Collection, Villa Buti и Ladenac Milano в виде диффузоров, спреев, саше и ароматических свечей. Хотите привнести нотку изысканности в свой интерьер – дополните его нашими ароматами."
  />,
];
