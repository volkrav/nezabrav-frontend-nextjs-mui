import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { FormEvent, useCallback, useState } from "react";
import ReportsSearchResult from "./ReportsSearchResult";
import { ESource } from "@/app/api";
import FormInput from "./FormInput";
import CustomButton, { EVariant } from "./CustomButton";

interface Props {
  initialValue: string;
  setPhone: (value: string) => void;
}

export default function SearchModule(props: Props) {
  const [search, setSearch] = useState(props.initialValue);

  const handleSubmitSearch = useCallback(() => {
    props.setPhone(search);
  }, [search]);

  const handleSubmitClear = useCallback(() => {
    setSearch(props.initialValue);
    props.setPhone("");
  }, []);

  return (
    <>
      <FormInput
        label="Номер телефону"
        value={search}
        onChange={setSearch}
        textFieldAutoFocus={true}
      />
      <Stack direction={"row"} spacing={2} sx={{ marginX: "auto", mt: "15px" }}>
        <CustomButton
          variant={EVariant.outlined}
          text="Очистити"
          onClick={handleSubmitClear}
        />
        <CustomButton
          variant={EVariant.contained}
          text="Шукати"
          onClick={handleSubmitSearch}
        />
      </Stack>

    </>
  );
}
