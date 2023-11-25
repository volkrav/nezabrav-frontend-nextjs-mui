import { Box, Typography } from "@mui/material";

interface Props {
  phone: string;
}

export default function NoResults(props: Props) {
  return (
    <Box>
      <Typography>За номером {props.phone} дані відсутні</Typography>
    </Box>
  );
}
