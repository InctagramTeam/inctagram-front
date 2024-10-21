import * as React from "react";

import { Button, Modal, useTranslation } from "@/shared";
import { useAddAvatarButton } from "@/shared/ui/add-profile-photo/add-avatar-button/hooks/useAddAvatarButton";
import ImageCropper from "@/shared/ui/add-profile-photo/add-avatar-button/image-cropper/image-cropper";

export const AddAvatarButton = () => {
  const { t } = useTranslation();
  const {
    modalUpdateAvatarOpen,
    setModalUpdateAvatarOpen,
    updateAvatarHandler,
  } = useAddAvatarButton();

  return (
    <Modal
      onOpenChange={(isOpen) => setModalUpdateAvatarOpen(isOpen)}
      open={modalUpdateAvatarOpen}
    >
      <Modal.Button asChild>
        <Button
          className={`max-w-[196px] !whitespace-normal break-words`}
          onClick={() => setModalUpdateAvatarOpen(true)}
          variant={"outline"}
        >
          {t.pages.profile.addProfilePhoto.title}
        </Button>
      </Modal.Button>
      <Modal.Content
        classNameChildrenWrapper={"px-[24px] !py-0"}
        classNameContent={"!max-w-[492px]"}
        classNameTitle={"text-H1-20"}
        classNameTitleContainer={"h-[59px]"}
        title={t.pages.profile.addProfilePhoto.title}
      >
        <ImageCropper
          closeModal={() => setModalUpdateAvatarOpen(false)}
          updateAvatar={updateAvatarHandler}
        />
      </Modal.Content>
    </Modal>
  );
};
