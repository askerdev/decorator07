import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export const FooterSection = () => (
  <footer className="flex w-full flex-col items-center bg-[#9BB395]">
    <Container>
      <div className="flex w-full justify-between px-3 py-5 sm:justify-center sm:gap-48 lg:items-center lg:justify-between">
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-28">
          <Logo />
          <a className="text-lg font-bold text-white">+7 (928) 912-45-45</a>
          <div className="flex flex-col text-sm text-white">
            <address className="not-italic  text-white">
              г. Нальчик, ул. Кирова 1В
            </address>
            без перерыва и выходных
          </div>
        </div>
        <a href="https://www.instagram.com/decorator_nalchik">
          <svg
            className="h-[34px] w-[34px]"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g clipPath="url(#clip10_1844)">
              <path
                id="Vector"
                d="M9.91675 17.0005C9.91675 13.0884 13.0881 9.91699 17 9.91699C20.9121 9.91699 24.0835 13.0884 24.0835 17.0005C24.0835 20.9121 20.9121 24.0835 17 24.0835C13.0881 24.0835 9.91675 20.9121 9.91675 17.0005ZM17 12.7505C14.6528 12.7505 12.75 14.6528 12.75 17.0005C12.75 19.3477 14.6528 21.2505 17 21.2505C19.3474 21.2505 21.25 19.3477 21.25 17.0005C21.25 14.6528 19.3474 12.7505 17 12.7505Z"
                fill="#FFFFFF"
                fillOpacity="0.850000"
                fillRule="evenodd"
              />
              <path
                id="Vector"
                d="M26.2083 9.2085C26.2083 9.99121 25.574 10.6255 24.7917 10.6255C24.0093 10.6255 23.375 9.99121 23.375 9.2085C23.375 8.42627 24.0093 7.79199 24.7917 7.79199C25.574 7.79199 26.2083 8.42627 26.2083 9.2085Z"
                fill="#FFFFFF"
                fillOpacity="0.850000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M2.83325 9.9165C2.83325 6.00439 6.00464 2.83301 9.9165 2.83301L24.0833 2.83301C27.9951 2.83301 31.1665 6.00439 31.1665 9.9165L31.1665 24.083C31.1665 27.9951 27.9951 31.1665 24.0833 31.1665L9.9165 31.1665C6.00464 31.1665 2.83325 27.9951 2.83325 24.083L2.83325 9.9165ZM9.9165 5.6665C7.56934 5.6665 5.6665 7.56934 5.6665 9.9165L5.6665 24.083C5.6665 26.4302 7.56934 28.333 9.9165 28.333L24.0833 28.333C26.4304 28.333 28.3333 26.4302 28.3333 24.083L28.3333 9.9165C28.3333 7.56934 26.4304 5.6665 24.0833 5.6665L9.9165 5.6665Z"
                fill="#FFFFFF"
                fillOpacity="0.850000"
                fillRule="evenodd"
              />
            </g>
          </svg>
        </a>
      </div>
    </Container>
  </footer>
);
