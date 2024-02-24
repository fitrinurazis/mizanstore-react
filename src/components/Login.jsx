// src/components/Login.js
import React, { useState } from "react";
import Image from "../assets/Image/BookLogo.jpg";
import Logo from "../assets/Image/GoogleLogo.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    //validasi email dan password
    if (email === "example@gmail.com" && password === "password123") {
      // Login berhasil,pengguna ke halaman lain atau melakukan tindakan lainnya
      alert("Login berhasil!");
    } else {
      setError("Alamat email atau password yang dimasukkan salah.");
    }
  };

  return (
    <div>
      <section className="flex items-center justify-center min-h-screen bg-red-600 shadow-lg bg-gradient-to-tr from from-slate-100">
        {/* login */}
        <div className="flex max-w-3xl p-5 bg-red-600 shadow-lg bg-gradient-to-tr from from-slate-100 to rounded-2xl">
          {/* form */}
          <div className="px-16 sm:w-1/2">
            <h1 className="mb-3 text-2xl font-bold">
              <a href="#">Mizan Store</a>
            </h1>
            <p className="text-sm first-letter:text-4xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-1 first-letter:float-left">Kemampuan membaca itu sebuah rahmat.Kegemaran membaca;sebuah kebahagiaan</p>
            <form className="flex flex-col gap-4">
              <input className="p-2 duration-200 border mt-7 rounded-2xl hover:scale-110 bg-slate-100" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" />
              <input className="p-2 duration-200 border rounded-2xl hover:scale-110 bg-slate-100" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="your password" />
              <button onClick={handleLogin} className="flex items-center justify-center w-1/2 text-sm duration-200 mx-14 bg-slate-100 rounded-2xl hover:scale-110">
                Login
              </button>
              {error && <p className="text-red-500">{error}</p>}
              <div className="grid items-center grid-cols-3 mt-1 text-black">
                <hr className="border-slate-100" />
                <p className="flex justify-center -my-10">OR</p>
                <hr className="border-slate-100" />
              </div>
              {/* logo google */}
              <button className="flex items-center justify-center w-full py-2 text-sm duration-200 border bg-slate-100 rounded-xl hover:scale-110">
                <img className="h-5 mr-2 bg-none" src={Logo} alt="" /> Login dengan Google
              </button>
              {/* logo google end */}
              <div className="flex items-center justify-between mt-3 text-xs text">
                <p>Tidak punya akun?</p>
                <button className="px-5 py-2 duration-200 border bg-slate-100 rounded-xl hover:scale-110">Daftar sekarang!</button>
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
