import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Agency from "./pages/Agency";
import SignIn from "./pages/Login";
import SignUp from "./pages/Signup";
import UpdatePassword from "./pages/UpdatePassword";
import { RealEstate } from "./pages/RealEstate";
import { RealEstate_2 } from "./pages/RealEstate_2";
import { Ecommerce } from "./pages/Ecommerce";
import { Ecommerce_2 } from "./pages/ecommerce_2/Ecommerce_2";
import { Ecommerce_2_Cart } from "./pages/ecommerce_2/Ecommerce_2_Cart";
import { RealEstate_3 } from "./pages/RealEstate_3";
import { RealEstate_4 } from "./pages/RealEstate_4";
import { Home } from "./pages/Home";
import { RealEstate_5 } from "./pages/real_estate_5/RealEstate_5";
import { PricingPage } from "./pages/real_estate_5/PricingPage";
import { BlogPage } from "./pages/real_estate_5/BlogPage";
import { RealEstate_6 } from "./pages/real_estate_6/RealEstate_6";
import { Law } from "./pages/law/Law";
import { About } from "./pages/law/About";
import { Services } from "./pages/law/Services";
import { Contact } from "./pages/law/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing_page_agency" element={<Agency />} />
        <Route path="/landing_page_real_estate" element={<RealEstate />} />
        <Route path="/landing_page_real_estate_2" element={<RealEstate_2 />} />
        <Route path="/landing_page_real_estate_3" element={<RealEstate_3 />} />
        <Route path="/landing_page_real_estate_4" element={<RealEstate_4 />} />
        <Route path="/landing_page_real_estate_5" element={<RealEstate_5 />} />
        <Route
          path="/landing_page_real_estate_5/pricing"
          element={<PricingPage />}
        />
        <Route path="/landing_page_real_estate_5/blog" element={<BlogPage />} />
        <Route path="/landing_page_real_estate_6" element={<RealEstate_6 />} />
        <Route path="/landing_page_law" element={<Law />} />
        <Route path="/landing_page_law/about" element={<About />} />
        <Route path="/landing_page_law/services" element={<Services />} />
        <Route path="/landing_page_law/contact" element={<Contact />} />
        <Route path="/landing_page_ecommerce" element={<Ecommerce />} />
        <Route path="/landing_page_ecommerce_2" element={<Ecommerce_2 />} />
        <Route
          path="/landing_page_ecommerce_2/cart"
          element={<Ecommerce_2_Cart />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
