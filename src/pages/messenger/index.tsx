import { getBaseAppLayout } from "@/shared/layouts";
import { PageWrapper } from "@/widgets/page-wrapper";

const MessengerPage = () => {
  return (
    <PageWrapper title={"Messenger | Instagram"}>
      <h1>Messenger</h1>
    </PageWrapper>
  );
};

MessengerPage.getLayout = getBaseAppLayout;
export default MessengerPage;
