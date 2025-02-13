import { ThemeProvider } from "@mui/material";
import theme from "../../../StoryBook/theme/theme";

import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
