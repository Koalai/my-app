import { useState, useEffect } from "react";
import supabase from "../supabase/supabase";
import { useNavigate } from "react-router-dom";

function UpdatePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Kiểm tra nếu đây là trang redirect từ email
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session?.access_token) {
        setMessage("Link không hợp lệ hoặc đã hết hạn. Vui lòng thử lại.");
      }
    };
    checkSession();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    // Validation
    if (!newPassword) {
      setMessage("Vui lòng nhập mật khẩu mới");
      return;
    }
    if (newPassword.length < 6) {
      setMessage("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("Mật khẩu xác nhận không khớp");
      return;
    }

    setIsLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      throw error;
    }

    setMessage("Cập nhật mật khẩu thành công!");
    setNewPassword("");
    setConfirmPassword("");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Đặt lại mật khẩu
        </h2>

        {message && (
          <div
            className={`p-3 rounded-md mb-6 text-sm text-center ${
              message.includes("Link không hợp lệ")
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
                Mật khẩu mới
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full text-sm text-slate-800 px-4 py-3 rounded-md border focus:border-blue-600 outline-none"
                placeholder="Nhập mật khẩu mới"
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="text-sm text-slate-800 font-medium mb-2 block">
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full text-sm text-slate-800 px-4 py-3 rounded-md border focus:border-blue-600 outline-none"
                placeholder="Xác nhận mật khẩu mới"
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
              {isLoading ? "Đang cập nhật..." : "Cập nhật mật khẩu"}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline text-sm"
            disabled={isLoading}
          >
            Quay lại đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdatePassword;
