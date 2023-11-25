import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  textFieldAutoFocus?: boolean;
}

export default function FormInput(props: Props) {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ p: 1, m: 1, marginX: "auto" }}
    >
      <TextField
        sx={{
          width: "50ch",
        }}
        label={props.label}
        variant="outlined"
        value={props.value}
        autoFocus={props.textFieldAutoFocus || false}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          props.onChange(event.target.value);
        }}
      />
    </Box>
  );
}
