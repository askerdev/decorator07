import { FooterSection } from "./_sections/Footer";
import { AssortmentSection } from "./_sections/assortment";
import { DreamsSection } from "./_sections/dreams";
import { HistorySection } from "./_sections/history";
import { InteriorsSection } from "./_sections/interiors";
import { MainSection } from "./_sections/main";
import { QuestionsSection } from "./_sections/questions";
import { RecruitingSection } from "./_sections/recruiting";
import { ReviewsSection } from "./_sections/reviews";

const Page = () => (
  <>
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

export default Page;
