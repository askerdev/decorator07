import { Logo } from "./Logo";

export const Header = () => (
  <header className="flex w-full max-w-screen-desktop justify-between p-4">
    <div className="flex flex-col items-center gap-3">
      <Logo />
      <address className="text-sm not-italic text-white xl:hidden">
        г. Нальчик, ул. Ахохова, 183
      </address>
    </div>
    <div className="hidden items-center gap-14 xl:flex">
      <ul className="flex gap-6 text-base font-medium text-white">
        <li>
          <a>Ассортимент</a>
        </li>
        <li>
          <a>История одного интерьера</a>
        </li>
        <li>
          <a>Примеры</a>
        </li>
        <li>
          <a>Отзывы</a>
        </li>
        <li>
          <a>Блог</a>
        </li>
      </ul>

      <div>
        <address className="flex flex-col text-center text-base font-medium not-italic text-white">
          <span>г. Нальчик</span>
          <span>ул. Ахохова, 183</span>
        </address>
      </div>
      <a className="text-lg font-bold text-white">+7 (928) 912-45-45</a>
    </div>
  </header>
);
