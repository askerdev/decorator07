import { Header } from "@/components/Header";

const Page = () => (
  <>
    <section className="w-full bg-[url('/images/hero_background.png')] bg-center">
      <div className="flex h-full w-full flex-col items-center bg-[linear-gradient(to_bottom,rgba(32,36,31,0.8),rgba(32,36,31,0.8))]">
        <Header />
      </div>
    </section>
  </>
);

export default Page;
