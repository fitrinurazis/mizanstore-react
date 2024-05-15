/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assets/img/BookLogo.jpg";
import { useState } from "react";
import axios from "axios";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password === "") {
      alert("Password is required");
      return;
    }
    try {
      const data = {
        email,
        password,
      };
      const res = await axios.post("http://localhost:8080/users/login", data);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
      }
      alert("login berhasil!");
      navigate("/pelanggan/dashboard");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <section className="flex items-center justify-center min-h-screen bg-red-600 shadow-lg bg-gradient-to-tr from from-slate-100">
        {/* login */}
        <div className="flex max-w-3xl p-5 bg-red-600 shadow-lg bg-gradient-to-tr from from-slate-100 to rounded-2xl">
          {/* form */}
          <div className="px-16 sm:w-1/2">
            <h1 className="mb-3 text-2xl font-bold">
              <Link to={"/"}>Mizan Store</Link>
            </h1>
            <p className="text-sm first-letter:text-4xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-1 ">
              Kemampuan membaca itu sebuah rahmat. Kegemaran membaca dan sebuah
              kebahagiaan
            </p>
            <form className="flex flex-col gap-4">
              <input
                className={
                  email !== ""
                    ? "p-2 duration-200 border mt-7 rounded-2xl bg-slate-100"
                    : "p-2 duration-200 hover:border-2 hover:border-red-700 mt-7 rounded-2xl bg-slate-100"
                }
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
              />
              <input
                className={
                  password !== ""
                    ? "p-2 duration-200 border mt-7 rounded-2xl bg-slate-100"
                    : "p-2 duration-200 hover:border-2 hover:border-red-700 mt-7 rounded-2xl bg-slate-100"
                }
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
              {/* toogle */}
              <div className="mt-px">
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={togglePasswordVisibility}
                />
                <label htmlFor="showPassword" className="ml-2">
                  Show Password
                </label>
              </div>
              {/* toogle end */}
              <button
                onClick={handleLogin}
                className="flex items-center justify-center h-6 text-sm duration-200 w-2xl mx-14 bg-slate-100 rounded-2xl hover:scale-110"
              >
                Login
              </button>
              <div className="flex items-center justify-between mt-3 text-xs text">
                <p>Tidak punya akun?</p>
                <Link to="/register">
                  <button className="px-5 py-2 duration-200 border bg-slate-100 rounded-xl hover:scale-110">
                    Daftar sekarang!
                  </button>
                </Link>
              </div>
            </form>
          </div>
          {/* form end */}
          {/* image */}
          <div className="flex items-stretch w-1/2 p-10 shadow-2xl rounded-2xl">
            <img className="rounded-2xl" src={Image} alt="logo mizan_store" />
          </div>
          {/* image end */}
        </div>
        {/* login end */}
      </section>
    </div>
  );
}

export default Login;
