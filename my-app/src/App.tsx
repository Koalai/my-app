import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import LandingPage_Agency from "./pages/LandingPage_Agency";
import SignIn from "./pages/Login";
import SignUp from "./pages/Signup";
import UpdatePassword from "./pages/UpdatePassword";
import { LandingPage_RealEstate } from "./pages/LandingPage_RealEstate";
import { LandingPage_RealEstate_2 } from "./pages/LandingPage_RealEstate_2";
import { LandingPage_Ecommerce } from "./pages/LandingPage_Ecommerce";
import { LandingPage_Ecommerce_2 } from "./pages/LandingPage_Ecommerce_2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing_page_agency" element={<LandingPage_Agency />} />
        <Route
          path="/landing_page_real_estate"
          element={<LandingPage_RealEstate />}
        />
        <Route
          path="/landing_page_real_estate_2"
          element={<LandingPage_RealEstate_2 />}
        />
        <Route
          path="/landing_page_ecommerce"
          element={<LandingPage_Ecommerce />}
        />
        <Route
          path="/landing_page_ecommerce_2"
          element={<LandingPage_Ecommerce_2 />}
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
