import { getBaseAppLayout } from "@/shared/layouts";
import { Navigations } from "@/widgets/main";
import { PageWrapper } from "@/widgets/page-wrapper";

function HomePage() {
  return (
    <PageWrapper paddingBlock={"24px"} title={"Main | Instagram"}>
      <Navigations />
    </PageWrapper>
  );
}

HomePage.getLayout = getBaseAppLayout;
export default HomePage;
