import { ReturnComponent } from "@/shared/types";

import { usePagination } from "./hooks";
import { NavigationButton } from "./navigation-button";
import { MainPaginationButtons } from "./pagination-buttons";
import { PerPageSelect } from "./per-page-select";

type Props = {
  count: number;
  onChange: (page: number) => void;
  onPerPageChange?: (itemPerPage: number | string) => void;
  page: number;
  perPage?: null | number;
  perPageOptions?: number[];
  siblings?: number;
};

export const Pagination = ({
  count,
  onChange,
  onPerPageChange,
  page,
  perPage = null,
  perPageOptions,
  siblings,
}: Props): ReturnComponent => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange,
    page,
    siblings,
  });

  const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange;

  return (
    <div className={"flex items-center"}>
      <div className={"flex gap-[12px]"}>
        <NavigationButton
          disabled={isFirstPage}
          onClick={handlePreviousPageClicked}
          type={"prev"}
        />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange as number[]}
        />

        <NavigationButton
          disabled={isLastPage}
          onClick={handleNextPageClicked}
          type={"next"}
        />
      </div>

      {showPerPageSelect && (
        <PerPageSelect
          {...{
            onPerPageChange,
            perPage,
            perPageOptions,
          }}
        />
      )}
    </div>
  );
};
