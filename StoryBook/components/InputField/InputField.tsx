import React from "react";

import { Grid2, InputLabel, TextField, TextFieldProps, Box } from "@mui/material";

type PickedInputFieldProps = "required" | "label" | "id" | "disabled" | "error" | "placeholder" | "onChange";

export type InputFieldProps = {
  errorMessage?: string;
} & Pick<TextFieldProps, PickedInputFieldProps>;

export const InputField = (props: InputFieldProps) => {
  const { required, label, id = "id", errorMessage, disabled, error, placeholder } = props;

  return (
    <>
      <Grid2 container direction="row">
        <Grid2 size={12}>
          {label ? (
            <InputLabel error={!!errorMessage || error} disabled={disabled} required={required} id={`${id}-label`}>
              {label}
            </InputLabel>
          ) : (
            <Box sx={{ mt: 3.75 }} />
          )}
        </Grid2>
      </Grid2>
      <TextField
        {...props}
        label=""
        variant="outlined"
        id={`${id}-inputField`}
        fullWidth={true}
        error={!!errorMessage || error}
        placeholder={disabled ? "" : placeholder}
        slotProps={{
          htmlInput: {
            "data-testid": `${id}-inputField`,
          },
        }}
        helperText={errorMessage}
      />
    </>
  );
};
