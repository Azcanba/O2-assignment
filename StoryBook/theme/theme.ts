import { createTheme, Theme } from "@mui/material";
import { overrides } from "./overrides";

const theme: Theme = createTheme({
  typography: {
    fontFamily: ["OnAirVar", "Arial"].join(","), // OnAirVar font which I dont have rights to use :)
  },
  components: overrides,
});

export default theme;
