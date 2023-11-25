import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { ChangeEvent, useCallback, useState } from "react";
import ReportsSearchResult from "./ReportsSearchResult";
import { ESource } from "@/app/api";
import FormInput from "./FormInput";

interface Props {
  initialValue: string;
  onChange: (value: string) => void;
  phone: string;
}

export default function SearchModule(props: Props) {
  const [search, setSearch] = useState(props.initialValue);

  const handleSubmit = useCallback(() => {
    props.onChange(search);
  }, [search]);

  return (
    <>
      <FormInput label="Номер телефону" value={search} onChange={setSearch} textFieldAutoFocus={true}/>
      <Stack direction={"row"} spacing={2} sx={{ marginX: "auto", mt: "15px" }}>
        <Button
          variant="outlined"
          sx={{ width: "20ch" }}
          onClick={(e) => {
            setSearch(props.initialValue);
            props.onChange("");
        }}
        >
          Очистити
        </Button>
        <Button
          variant="contained"
          sx={{ width: "20ch" }}
          onClick={handleSubmit}
        >
          Шукати
        </Button>
      </Stack>
      <ReportsSearchResult source={ESource.nezabrav} phone={props.phone} />
      <ReportsSearchResult source={ESource.blackbox} phone={props.phone} />
      <ReportsSearchResult source={ESource.otzyvua} phone={props.phone} />
    </>
  );
}
