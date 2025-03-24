import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import SignIn from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <nav className="p-4 bg-slate-900 text-white">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:underline">
                Trang Chủ
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">
                Đăng Nhập
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
