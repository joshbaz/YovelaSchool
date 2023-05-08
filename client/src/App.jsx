import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./screens/layout";
import Home from "./screens/home/index.jsx";
import AboutUs from "./screens/aboutus";
import AboutAce from "./screens/aboutace";
import AdmissionProcess from "./screens/admissionprocess";
function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourschool/aboutus" element={<AboutUs />} />

            <Route path="/ourschool/statementoffaith" element={<Home />} />
            <Route path="/acdemics/ace" element={<AboutAce />} />
            <Route path="/admissions/process" element={<AdmissionProcess />} />
            <Route path="/schoollife/conventions" element={<Home />} />
            <Route path="/schoollife/extracurricular" element={<Home />} />
            <Route path="/contactus" element={<Home />} />
            <Route path="/appointment" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
