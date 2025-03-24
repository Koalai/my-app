import { useState } from "react";
import supabase from "../supabase/supabase"; // Import instance Supabase
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (formData.password.length < 6) {
      setMessage("Mật khẩu phải có ít nhất 6 ký tự");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setMessage("Mật khẩu xác nhận không khớp");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    if (!validateForm()) return;

    setIsLoading(true);

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setMessage(`Lỗi: ${error.message}`);
    }

    setMessage(
      "Đăng ký thành công! Vui lòng kiểm tra email để xác nhận tài khoản."
    );
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Đăng ký tài khoản
        </h2>

        {message && (
          <div
            className={`p-3 rounded-md mb-6 text-sm text-center ${
              message.includes("Lỗi") || message.includes("Mật khẩu")
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-sm text-slate-800 font-medium mb-2 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-sm text-slate-800 px-4 py-3 rounded-md border focus:border-blue-600 outline-none"
                placeholder="Nhập email của bạn"
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="text-sm text-slate-800 font-medium mb-2 block">
                Mật khẩu
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full text-sm text-slate-800 px-4 py-3 rounded-md border focus:border-blue-600 outline-none"
                placeholder="Nhập mật khẩu"
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="text-sm text-slate-800 font-medium mb-2 block">
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full text-sm text-slate-800 px-4 py-3 rounded-md border focus:border-blue-600 outline-none"
                placeholder="Xác nhận mật khẩu"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 text-sm font-semibold rounded text-white ${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } focus:outline-none`}
            >
              {isLoading ? "Đang đăng ký..." : "Đăng ký"}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-slate-500">
            Đã có tài khoản?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:underline"
              disabled={isLoading}
            >
              Đăng nhập
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
