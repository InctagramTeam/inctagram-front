import { FavoritePosts } from "@/feature";
import { ReturnComponent, useResponsive, useTranslation } from "@/shared";
import { getBaseAppLayout } from "@/shared/layouts";
import { PageWrapper } from "@/widgets/page-wrapper";

const FavoritesPage = (): ReturnComponent => {
  const { t } = useTranslation();
  const { xs } = useResponsive();

  return (
    <PageWrapper
      className={"w-full"}
      description={t.pages.favorites.metaDescription}
      paddingBlock={xs ? "16px" : "36px"}
      title={t.pages.favorites.metaTitle}
    >
      <FavoritePosts />
    </PageWrapper>
  );
};

FavoritesPage.getLayout = getBaseAppLayout;
export default FavoritesPage;
