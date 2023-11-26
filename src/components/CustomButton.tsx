import { Box, Button, Stack } from "@mui/material";
import { FormEvent } from "react";

export enum EVariant {
  text = "text",
  outlined = "outlined",
  contained = "contained",
}

interface Props {
  variant: EVariant;
  text: string;
  onClick: (event: FormEvent) => void;
}

export default function CustomButton(props: Props) {
  return (
    // <Stack direction={"row"} spacing={2} sx={{ marginX: "auto", mt: "15px" }}>
      <Button
        variant={props.variant}
        sx={{ width: "20ch" }}
        onClick={props.onClick}
      >
        {props.text}
      </Button>
    // </Stack>
  );
}
