import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Agency from "./pages/Agency";
import SignIn from "./pages/Login";
import SignUp from "./pages/Signup";
import UpdatePassword from "./pages/UpdatePassword";
import { RealEstate } from "./pages/RealEstate";
import { RealEstate_2 } from "./pages/RealEstate_2";
import { Ecommerce } from "./pages/Ecommerce";
import { Ecommerce_2 } from "./pages/Ecommerce_2";
import { Ecommerce_2_Cart } from "./pages/Ecommerce_2_Cart";
import { RealEstate_3 } from "./pages/RealEstate_3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing_page_agency" element={<Agency />} />
        <Route path="/landing_page_real_estate" element={<RealEstate />} />
        <Route path="/landing_page_real_estate_2" element={<RealEstate_2 />} />
        <Route path="/landing_page_real_estate_3" element={<RealEstate_3 />} />
        <Route path="/landing_page_ecommerce" element={<Ecommerce />} />
        <Route path="/landing_page_ecommerce_2" element={<Ecommerce_2 />} />
        <Route
          path="/landing_page_ecommerce_2/cart"
          element={<Ecommerce_2_Cart />}
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
