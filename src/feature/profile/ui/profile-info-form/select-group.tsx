import React, { useState } from "react";
import { Control, UseFormResetField } from "react-hook-form";

import { ProfileInfoFormValues } from "@/feature/profile";
import { ControlledSelectWithCity } from "@/feature/profile/ui/profile-info-form/controlled-select-with-city";
import { ControlledSelectWithCountry } from "@/feature/profile/ui/profile-info-form/controlled-select-with-country";
import { EMPTY_STRING } from "@/shared";

type Props = {
  control: Control<ProfileInfoFormValues>;
  resetFieldForm: UseFormResetField<ProfileInfoFormValues>;
};

export const SelectGroup = ({ control, resetFieldForm }: Props) => {
  const [countryId, setCountryId] = useState(EMPTY_STRING);

  return (
    <div className={"flex justify-between gap-6"}>
      <ControlledSelectWithCountry
        className={"w-full"}
        control={control}
        label={"Select your country"}
        name={"country"}
        placeholder={"Country"}
        resetFieldForm={resetFieldForm}
        setCountryId={setCountryId}
        typeRequest={"countries"}
      />
      <ControlledSelectWithCity
        className={"w-full"}
        control={control}
        countryIds={countryId}
        label={"Select your city"}
        name={"city"}
        placeholder={"City"}
        typeRequest={"cities"}
      />
    </div>
  );
};

SelectGroup.displayName = "SelectGroup";
