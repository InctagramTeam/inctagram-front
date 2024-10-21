import { useEffect, useState } from "react";

import { useTranslation } from "@/shared/lib";
import { ReturnComponent } from "@/shared/types";
import { Button, Flex, Modal, Text } from "@/shared/ui";
import { FlexCol } from "@/shared/ui/flex";

type Props = {
  email?: string;
  logout: () => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
};

export const LogoutModal = (props: Props): ReturnComponent => {
  const { email = "example@bk.ru", logout, onOpenChange, open } = props;
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  const handleClickYes = () => {
    logout();
    onOpenChange(false);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Modal onOpenChange={onOpenChange} open={open}>
      <Modal.Content
        asChild
        classNameContent={"max-w-[378px] w-[90vw]"}
        title={t.pages.profile.logOut.modalTitle}
      >
        <FlexCol gap={"18"} items={"start"}>
          <Text asComponent={"p"}>
            {t.pages.profile.logOut.modalText} {email}?
          </Text>
          <Flex justify={"spaceBetween"} maxWidth>
            <Button className={"px-[36px] py-[6px]"} onClick={handleClickYes}>
              {t.pages.profile.logOut.modalBtnYes}
            </Button>
            <Button
              className={"px-[36px] py-[6px]"}
              onClick={() => onOpenChange(false)}
            >
              {t.pages.profile.logOut.modalBtnNo}
            </Button>
          </Flex>
        </FlexCol>
      </Modal.Content>
    </Modal>
  );
};
