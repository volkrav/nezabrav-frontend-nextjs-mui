import { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import FormInput from "./FormInput";
// import Textarea from "@mui/joy/Textarea";

export default function AddModule() {
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ttn, setTtn] = useState("");
  const [report, setReport] = useState("");

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <FormInput
        label="Номер телефону"
        value={phone}
        onChange={setPhone}
        textFieldAutoFocus={true}
      />
      <FormInput label="Імʼя" value={firstName} onChange={setFirstName} />
      <FormInput label="Прізвище" value={lastName} onChange={setLastName} />
      <FormInput label="Номер ТТН" value={ttn} onChange={setTtn} />
      <FormInput label="Коментар" value={report} onChange={setReport} />
      {/* <Textarea placeholder="Type anything…" /> */}
      <Button type="submit">Submit</Button>
    </Box>
  );
}
