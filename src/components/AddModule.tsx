import { FormEvent, useState } from "react";
import { Box, Stack } from "@mui/material";
import { addReport } from "@/app/api";
import CustomButton, { EVariant } from "./CustomButton";
import CustomTextField from "./CustomTextField";

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
        value={phone}
        autoFocus={true}
        required={true}
        onChange={setPhone}
      />
      <CustomTextField label="Імʼя" value={firstName} onChange={setFirstName} />
      <CustomTextField
        label="Прізвище"
        value={lastName}
        required={true}
        onChange={setLastName}
      />
      <CustomTextField
        label="Номер ТТН"
        value={ttn}
        required={true}
        onChange={setTtn}
        placeholder="ТТН тільки Нової Пошти"
      />
      <>
        <CustomTextField
          label="Коментарій"
          placeholder="Клієнт не забрав відправлення. Відправник зазнав збитків за транспортування."
          value={report}
          onChange={setReport}
          multiline
          minRows={4}
        />
      </>
      <Stack direction={"row"} spacing={2} sx={{ marginX: "auto", mt: "15px" }}>
        <CustomButton
          variant={EVariant.outlined}
          text="Очистити"
          onClick={handleSubmitClear}
        />
        <CustomButton
          variant={EVariant.contained}
          text="Відправити"
          onClick={handleSubmitAdd}
        />
      </Stack>
    </Box>
  );
}
