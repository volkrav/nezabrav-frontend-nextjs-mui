import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { ChangeEvent, useCallback, useState } from "react";

interface Props {
  initialValue: string;
  onChange: (value: string) => void;
}

export default function SearchModule(props: Props) {
  const [search, setSearch] = useState(props.initialValue);

  const handleSubmit = useCallback(() => {
    props.onChange(search);
  }, [search]);

  return (
    <div>
      <Stack sx={{ mt: "40px" }}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ marginX: "auto" }}
        >
          <TextField
            sx={{
              width: "50ch",
            }}
            label="Номер телефону"
            variant="outlined"
            value={search}
            autoFocus={true}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setSearch(event.target.value);
            }}
          />
        </Box>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ marginX: "auto", mt: "15px" }}
        >
          <Button variant="outlined" sx={{ width: "20ch" }}
          onClick={(e) => setSearch(props.initialValue)}>
            Очистити
          </Button>
          <Button variant="contained" sx={{ width: "20ch" }}
            onClick={handleSubmit}>
            Шукати
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
