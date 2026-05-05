"use client";
import { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { useUser } from "@/context/UserContext";

export default function AuthModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user, setUser} = useUser();

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const url = isLogin ? "/api/auth/login" : "/api/auth/signup";
      const res = await axios.post(url, form);

      if(res.status === 200){
        if (isLogin) {
        setIsLogin(true);
        setUser(res.data.user);
        setForm({ name: "", email: "", password: "" });
        setError("");
        setIsOpen(false);
      } else {
        setIsLogin(true);
        setForm({ name: "", email: "", password: "" });
        setError("");
        setIsOpen(false);
      }
      }


    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const switchMode = (mode: boolean) => {
    setIsLogin(mode);
    setError("");
    setForm({ name: "", email: "", password: "" });
  };

  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
    //   <div className="bg-white rounded-2xl w-85 shadow-xl overflow-hidden border border-yellow-100">

    //     {/* Top accent bar */}
    //     <div className="h-1 w-full bg-main" />
 
    //     <div className="p-7">
    //       {/* Icon */}
    //       <div className="flex justify-between items-start">
    //       <div className="w-10 h-10 rounded-xl bg-yellow-50 border border-yellow-200 flex items-center justify-center mb-5">
    //         <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    //           stroke="#b8940a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //           <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    //           <circle cx="12" cy="7" r="4" />
    //         </svg>
    //       </div>

    //       <button className="cursor-pointer" onClick={()=> setIsOpen(false)}>
    //         <X/>
    //       </button>
    //       </div>

    //       {/* Tab Switcher */}
    //       <div className="flex bg-yellow-50 rounded-xl p-1 mb-6 border border-yellow-100">
    //         <button
    //           onClick={() => switchMode(true)}
    //           className={`flex-1 py-2 text-sm rounded-lg transition-all duration-200 font-medium
    //             ${isLogin
    //               ? "bg-white text-gray-800 shadow-sm border border-yellow-100"
    //               : "text-gray-400 hover:text-gray-600"
    //             }`}
    //         >
    //           Login
    //         </button>
    //         <button
    //           onClick={() => switchMode(false)}
    //           className={`flex-1 py-2 text-sm rounded-lg transition-all duration-200 font-medium
    //             ${!isLogin
    //               ? "bg-white text-gray-800 shadow-sm border border-yellow-100"
    //               : "text-gray-400 hover:text-gray-600"
    //             }`}
    //         >
    //           Sign up
    //         </button>
    //       </div>

    //       {/* Fields */}
    //       <div className="space-y-3">
    //         {!isLogin && (
    //           <input
    //             placeholder="Full name"
    //             value={form.name}
    //             onChange={(e) => setForm({ ...form, name: e.target.value })}
    //             className="w-full px-4 py-2.5 rounded-xl border
    //               text-gray-800 text-sm placeholder:text-gray-400
    //               focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200
    //               transition-all duration-200"
    //           />
    //         )}

    //         <input
    //           type="email"
    //           placeholder="Email address"
    //           value={form.email}
    //           onChange={(e) => setForm({ ...form, email: e.target.value })}
    //           className="w-full px-4 py-2.5 rounded-xl border
    //             text-gray-800 text-sm placeholder:text-gray-400
    //             focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200
    //             transition-all duration-200"
    //         />

    //         <input
    //           type="password"
    //           placeholder="Password"
    //           value={form.password}
    //           onChange={(e) => setForm({ ...form, password: e.target.value })}
    //           className="w-full px-4 py-2.5 rounded-xl border
    //             text-gray-800 text-sm placeholder:text-gray-400
    //             focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200
    //             transition-all duration-200"
    //         />
    //       </div>

    //       {/* Error */}
    //       {error && (
    //         <p className="mt-3 text-xs text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
    //           {error}
    //         </p>
    //       )}

    //       {/* Submit Button */}
    //       <button
    //         onClick={handleSubmit}
    //         disabled={loading}
    //         className="mt-5 w-full py-2.5 cursor-pointer rounded-xl bg-main hover:bg-yellow-500
    //           text-gray-900 font-medium text-sm
    //           transition-all duration-200 active:scale-[0.98]
    //           disabled:opacity-60 disabled:cursor-not-allowed
    //           flex items-center justify-center gap-2"
    //       >
    //         {loading ? (
    //           <>
    //             <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
    //               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
    //               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
    //             </svg>
    //             {isLogin ? "Logging in..." : "Creating account..."}
    //           </>
    //         ) : (
    //           isLogin ? "Login" : "Create account"
    //         )}
    //       </button>

    //       {/* Forgot password (login only) */}
    //       {/* {isLogin && (
    //         <p className="mt-3 text-center text-xs text-yellow-600 hover:text-yellow-700 cursor-pointer transition-colors">
    //           Forgot your password?
    //         </p>
    //       )} */}
    //     </div>
    //   </div>
    // </div>
    <div className="modal-overlay">
  <div className="modal-container">

    <div className="modal-top-bar" />

    <div className="modal-content">

      <div className="modal-header">
        <div className="modal-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="#1a47fb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>

        <button className="modal-close" onClick={() => setIsOpen(false)}>
          <X />
        </button>
      </div>

      {/* Tabs */}
      <div className="modal-tabs">
        <button
          onClick={() => switchMode(true)}
          className={`tab-btn ${isLogin ? "active" : ""}`}
        >
          Login
        </button>
        <button
          onClick={() => switchMode(false)}
          className={`tab-btn ${!isLogin ? "active" : ""}`}
        >
          Sign up
        </button>
      </div>

      {/* Inputs */}
      <div className="modal-fields">
        {!isLogin && (
          <input
            className="input"
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        )}

        <input
          className="input"
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="submit-btn text-white"
      >
        {loading ? "Loading..." : isLogin ? "Login" : "Create account"}
      </button>
    </div>
  </div>
  <style jsx>{`
.modal-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(6px);
  z-index: 50;
}

.modal-container {
  width: 340px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #1a47fb;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.modal-top-bar {
  height: 4px;
  width: 100%;
  background: #1a47fb;
}

.modal-content {
  padding: 20px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.modal-icon {
  width: 40px;
  height: 40px;
  background: #1a47fb1a;
  border: 1px solid #1a47fb33;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close {
  cursor: pointer;
  background: none;
  border: none;
}

.modal-tabs {
  display: flex;
  background: #1a47fb1a;
  padding: 4px;
  border-radius: 10px;
  margin: 20px 0;
}

.tab-btn {
  flex: 1;
  padding: 8px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #9ca3af;
  cursor: pointer;
}

.tab-btn.active {
  background: white;
  color: #1a47fb;
  border-radius: 8px;
  border: 1px solid #1a47fb33;
}

.modal-fields {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  font-size: 14px;
}

.input:focus {
  outline: none;
  border-color: #1a47fb;
  box-shadow: 0 0 0 2px #1a47fb1a;
}

.error {
  margin-top: 10px;
  font-size: 12px;
  color: red;
  background: #fef2f2;
  padding: 8px;
  border-radius: 8px;
}

.submit-btn {
  margin-top: 15px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: #1a47fb;
  border: none;
  cursor: pointer;
  font-weight: 500;
}

.submit-btn:hover {
  background: #1a47fc;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
`}</style>
</div>

  );
}