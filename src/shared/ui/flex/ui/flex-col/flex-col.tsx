import { forwardRef } from "react";

import { Flex, FlexProps } from "src/shared/ui/flex/ui/flex";

type FlexColProps = { className?: string } & Omit<FlexProps, "direction">;

/** Конкретная имплементация Flex - чтобы не писать <Flex direction='flex-col' />, просто пишем FlexCol и применяем все пропсы из Flex */
export const FlexCol = forwardRef<HTMLDivElement, FlexColProps>(
  (props, ref) => {
    const { children, className, items = "center", ...rest } = props;

    return (
      <Flex
        className={className}
        {...rest}
        direction={"column"}
        items={items}
        ref={ref}
      >
        {children}
      </Flex>
    );
  },
);
