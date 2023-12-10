import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { FormEvent, useCallback, useEffect, useState } from "react";
import ReportsSearchResult from "./ReportsSearchResult";
import { ESource } from "@/app/api";
import FormInput from "./CustomTextField";
import CustomButton, { EVariant } from "./CustomButton";
import { Box } from "@mui/material";
import CustomTextField from "./CustomTextField";

interface Props {
  initialValue: string;
  setPhone: (value: string) => void;
}

export default function SearchBar(props: Props) {
  const [search, setSearch] = useState(props.initialValue);

  const handleSubmitSearch = useCallback(() => {
    props.setPhone(search);
  }, [search]);

  const handleSubmitClear = useCallback(() => {
    setSearch(props.initialValue);
    props.setPhone(props.initialValue);
  }, []);

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        p: 1,
        m: 1,
        marginX: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CustomTextField
        label="Номер телефону"
        value={search}
        autoFocus={true}
        onChange={setSearch}
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
    </Box>
  );
}
