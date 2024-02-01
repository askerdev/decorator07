import { Grid, Row, Single } from "./photos";

export const tabs = {
  "1": "Зал",
  "2": "Гостиная",
  "3": "Кухня",
  "4": "Ванная",
  "5": "Спальня",
  "6": "Прихожая",
  "7": "Кофейня",
};

export const TabPhotos: Record<TabKey, JSX.Element> = {
  "1": (
    <Single img="/images/interiors/1.jpg">
      обои «Grandeco», бра и люстра от «Arte lamp» и «ST Luce» , шторы от наших
      партнеров «Evitex»
    </Single>
  ),
  "2": (
    <Single img="/images/interiors/2.jpg">
      краска Sherwin-Williams, плинтусы, карнизы и стеновые панели «Orac Decor»,
      световые линии «Salonysveta», кварц-винил «Quick step»
    </Single>
  ),
  "3": (
    <Single img="/images/interiors/3.jpg">
      обои «Marburg» и «Grandeco», подвес «ST Luce», плитка «Laparet», 3D панель
      от «Orac Decor»
    </Single>
  ),
  "4": (
    <Grid
      imgs={[
        {
          src: "/images/interiors/4/1.jpg",
          description:
            "3 вида керамогранита: «Coliseum», «Belleza», «Porselanosa»",
        },
        {
          src: "/images/interiors/4/2.jpg",
          description: "керамогранит «Coliseum»",
        },
        {
          src: "/images/interiors/4/3.jpg",
          description: "керамическая плитка и керамогранит «Kerama Marazzi»",
        },
        {
          src: "/images/interiors/4/4.jpg",
          description:
            "плитка «Italon», «Kerama Marazzi»,смесители «Orange», панель смыва «Tece», розетки и выключатели «Schneider Electric», ванна «Astra Form»",
        },
      ]}
    />
  ),
  "5": (
    <Grid
      imgs={[
        {
          src: "/images/interiors/5/1.jpg",
          description:
            "кварц-винил «Quick step», розетки и выключатели «SchneiderElectric», светильники «Stella nova», краска «Sherwin Williams»",
        },
        {
          src: "/images/interiors/5/2.jpg",
          description:
            "краска «Sherwin Williams», кварц винил» Quick step», розетки и выключатели «Schneider Electric», светильники «Stellanova», лепнина «Orac Decor»",
        },
        {
          src: "/images/interiors/5/3.jpg",
          description: "профиль для светодиодной ленты, бренд «Салон света»",
        },
        {
          src: "/images/interiors/5/4.jpg",
          description: "обои «Marburg Art Deco», бра и люстра «Art Lamp»",
        },
      ]}
    />
  ),
  "6": (
    <Grid
      imgs={[
        {
          src: "/images/interiors/6/1.jpg",
          description:
            "плитка «Laparet», накладные споты «Lightstar», обои «Grandeco»",
        },
        {
          src: "/images/interiors/6/2.jpg",
          description:
            "краска»Sherwin Williams» кварц винил «Quick step», розетки и выключатели «Schneider Electric», светильники «Stellanova», лепнина» Orac Decor»",
        },
      ]}
    />
  ),
  "7": (
    <Row
      imgs={[
        "/images/interiors/7/1.jpg",
        "/images/interiors/7/2.jpg",
        "/images/interiors/7/3.jpg",
        "/images/interiors/7/4.jpg",
      ]}
    />
  ),
};

export type TabKey = keyof typeof tabs;
