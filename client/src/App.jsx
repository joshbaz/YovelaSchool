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
import Clubs from "./screens/clubs";
import ContactUs from "./screens/contactus";
import Appointment from "./screens/appointment";
import StatmentOfFaith from "./screens/statementoffaith";
import BoardOfGovernors from "./screens/boardofgovernors";
import Careers from "./screens/careers";
import CareerInfo from "./screens/careers/CareerInfo";
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

            <Route
              path="/ourschool/statementoffaith"
              element={<StatmentOfFaith />}
            />
            <Route
              path="/ourschool/boardofgovernors"
              element={<BoardOfGovernors />}
            />
            <Route path="/ourschool/careers" element={<Careers />} />
            <Route path="/ourschool/careers/info" element={<CareerInfo />} />
            <Route path="/acdemics/ace" element={<AboutAce />} />
            <Route path="/admissions/process" element={<AdmissionProcess />} />
            <Route path="/schoollife/conventions" element={<Home />} />
            <Route path="/schoollife/extracurricular" element={<Clubs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
