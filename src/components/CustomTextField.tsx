import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  textFieldAutoFocus?: boolean;
  textFieldRequired?: boolean;
}

export default function CustomTextField(props: Props) {
  return (
    <TextField
      sx={{
        width: "50ch",
        mt: "15px",
      }}
      label={props.label}
      variant="outlined"
      value={props.value}
      autoFocus={props.textFieldAutoFocus || false}
      required={props.textFieldRequired|| false}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
      }}
    />
  );
}
