import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
  required?: boolean;
  errorMsg?: string;
  multiline?: boolean;
  minRows?: number;
  placeholder?: string;
}

export default function CustomTextField(props: Props) {
  return (
    <TextField
      sx={{
        width: "50ch",
        mt: "15px",
      }}
      error={props.errorMsg != undefined}
      label={props.label}
      variant="outlined"
      value={props.value}
      autoFocus={props.autoFocus || false}
      required={props.required || false}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
      }}
      multiline={props.multiline || false}
      minRows={props.minRows || 1}
      placeholder={props.placeholder || ""}
      helperText={props.errorMsg}
      />
  );
}
