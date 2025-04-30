"use client";
import { FooterSection } from "./_sections/footer";
import { AssortmentSection } from "./_sections/assortment";
import { DreamsSection } from "./_sections/dreams";
import { HistorySection } from "./_sections/history";
import { InteriorsSection } from "./_sections/interiors";
import { MainSection } from "./_sections/main";
import { QuestionsSection } from "./_sections/questions";
import { RecruitingSection } from "./_sections/recruiting";
import { ReviewsSection } from "./_sections/reviews";
import { FormModal } from "@/components/Modal";
import { Menu } from "@/components/Menu";
import { useFormModal } from "@/state/FormModalContenxt";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const Page = () => {
  const { isOpen, setOpen } = useFormModal();

  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAIL_JS,
      blockHeadless: true,
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    });
  }, []);

  return (
    <>
      <Menu open={isOpen} />
      <FormModal open={isOpen} setOpen={setOpen} />
      <MainSection />
      <DreamsSection />
      <AssortmentSection />
      <HistorySection />
      <InteriorsSection />
      <ReviewsSection />
      <RecruitingSection />
      <QuestionsSection />
      <FooterSection />
    </>
  );
};

export default Page;
