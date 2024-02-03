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
import { useCallback, useState } from "react";
import { Modal } from "@/components/Modal";
import { Menu } from "@/components/Menu";

const Page = () => {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);

  return (
    <>
      <Menu open={open} />
      <Modal open={open} setOpen={setOpen} />
      <MainSection open={openModal} />
      <DreamsSection open={openModal} />
      <AssortmentSection open={openModal} />
      <HistorySection />
      <InteriorsSection />
      <ReviewsSection />
      <RecruitingSection open={openModal} />
      <QuestionsSection open={openModal} />
      <FooterSection />
    </>
  );
};

export default Page;
