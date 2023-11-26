import { FormEvent, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import FormInput from "./FormInput";
import { addReport } from "@/app/api";
import CustomButton, { EVariant } from "./CustomButton";
// import Textarea from "@mui/joy/Textarea";

export default function AddModule() {
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ttn, setTtn] = useState("");
  const [report, setReport] = useState("");

  function handleSubmitClear(event: FormEvent) {
    event.preventDefault();
    setPhone("");
    setFirstName("");
    setLastName("");
    setTtn("");
    setReport("");
  }

  async function handleSubmitAdd(event: FormEvent) {
    event.preventDefault();
    try {
      addReport({
        phone,
        firstName,
        lastName,
        ttn,
        report,
      })
        .then((message) => {
          handleSubmitClear(event);
          alert(message);
        })
        .catch((error) => alert(error));
    } catch (error: unknown) {
      alert(error.message);
    }
  }

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
      <FormInput
        label="Where is the TextArea?"
        value={report}
        onChange={setReport}
      />
      {/* <Textarea placeholder="Type anything…" /> */}

      <Stack direction={"row"} spacing={2} sx={{ marginX: "auto", mt: "15px" }}>
      <CustomButton
        variant={EVariant.outlined}
        text="Очистити"
        onClick={handleSubmitClear}
      />
      <CustomButton
        variant={EVariant.contained}
        text="Додати"
        onClick={handleSubmitAdd}
      />
      </Stack>
    </Box>
  );
}
