import React, { useState } from "react";
import { Grid2 } from "@mui/material";
import { InputField } from "../../../../StoryBook/components/TextField/InputField";

export const HomePage = () => {
  return (
    <Grid2 container justifyContent="center">
      <Grid2 container size={{ xs: 12, md: 4, xl: 2 }} rowGap={3} justifyContent="center">
        <Grid2 size={12}>
          <InputField label="Input" placeholder="Type something" id="input-field" />
        </Grid2>
        <Grid2 size={12}>
          <InputField placeholder="No label" id="input-field-no-label" />
        </Grid2>
        <Grid2 size={12}>
          <InputField label="Input Disabled" placeholder="Type something" id="input-field-disabled" disabled />
        </Grid2>
        <Grid2 size={12}>
          <InputField label="Input Required" placeholder="Type something" id="input-field-required" required />
        </Grid2>
        <Grid2 size={12}>
          <InputField
            label="Input Error"
            placeholder="Type something"
            id="input-field-error"
            required
            errorMessage="This field is required"
          />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};
