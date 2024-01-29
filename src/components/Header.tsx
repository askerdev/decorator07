import { Logo } from "./Logo";

export const Header = () => (
  <header className="flex w-full max-w-screen-desktop justify-between p-4">
    <div className="flex flex-col items-center gap-3">
      <Logo />
      <address className="text-sm not-italic text-white">
        г. Нальчик, ул. Ахохова, 183
      </address>
    </div>
  </header>
);
