import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import LandingPage_Agency from "./pages/LandingPage_Agency";
import SignIn from "./pages/Login";
import SignUp from "./pages/Signup";
import UpdatePassword from "./pages/UpdatePassword";
import { LandingPage_Software } from "./pages/LandingPage_Software";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing_page_agency" element={<LandingPage_Agency />} />
        <Route
          path="/landing_page_software"
          element={<LandingPage_Software />}
        />
        <Route path="/login" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
