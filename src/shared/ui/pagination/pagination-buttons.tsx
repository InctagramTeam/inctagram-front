import { ReturnComponent } from "@/shared/types";

import { PageButton } from "./page-button";

type Props = {
  currentPage: number;
  onClick: (pageNumber: number) => () => void;
  paginationRange: number[];
};

export const MainPaginationButtons = ({
  currentPage,
  onClick,
  paginationRange,
}: Props): ReturnComponent => {
  return (
    <>
      {paginationRange.map((page: number, index) => {
        const isSelected = page === currentPage;

        return (
          <PageButton
            key={index}
            onClick={onClick(page)}
            page={page}
            selected={isSelected}
          />
        );
      })}
    </>
  );
};
