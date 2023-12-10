import { FormEvent, useState } from "react";
import { Box, Stack, TextField } from "@mui/material";
import { addReport } from "@/app/api";
import CustomButton, { EVariant } from "./CustomButton";
import CustomTextField from "./CustomTextField";

interface Errors {
  phone?: string;
  lastName?: string;
  ttn?: string;
}

export default function AddModule() {
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ttn, setTtn] = useState("");
  const [report, setReport] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmitClear(event: FormEvent) {
    event.preventDefault();
    setPhone("");
    setFirstName("");
    setLastName("");
    setTtn("");
    setReport("");
    setErrors({});
  }

  function validateForm() {
    const e: Errors = {};
    if (!phone) {
      e.phone = "Це поле обовʼязкове!";
    }
    if (!lastName) {
      e.lastName = "Це поле обовʼязкове!";
    }
    if (lastName && lastName.length < 3) {
      e.lastName = "Прізвище повинне мати більше 2 символів";
    }
    if (!ttn) {
      e.ttn = "Це поле обовʼязкове!";
    }
    setErrors(e);

    return Object.keys(e).length == 0;
  }

  async function handleSubmitAdd(event: FormEvent) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
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
        errorMsg={errors.phone}
        onChange={(value) => {
          setPhone(value);
          // setErrorPhone(undefined);
        }}
      />
      <CustomTextField label="Імʼя" value={firstName} onChange={setFirstName} />
      <CustomTextField
        label="Прізвище"
        value={lastName}
        required={true}
        errorMsg={errors.lastName}
        onChange={(value) => {
          setLastName(value);
          // setErrorLastName(undefined);
        }}
      />
      <CustomTextField
        label="Номер ТТН"
        value={ttn}
        required={true}
        errorMsg={errors.ttn}
        onChange={(value) => {
          setTtn(value);
          // setErrorTtn(undefined);
        }}
        placeholder="ТТН тільки Нової Пошти"
      />
      <>
        <CustomTextField
          label="Коментар"
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
