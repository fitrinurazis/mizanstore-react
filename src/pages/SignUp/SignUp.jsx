import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [konfimasiPassword, setKonfirmasiPassword] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kota, setKota] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [alamatLengkap, setAlamatLengkap] = useState("");
  const [kodePos, setKodePos] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !email ||
      !password ||
      !konfimasiPassword ||
      !provinsi ||
      !kota ||
      !kecamatan ||
      !alamatLengkap ||
      !kodePos
    ) {
      alert("field is required");
    }
    if (konfimasiPassword !== password) {
      alert("please check field confirm password!");
    }
    if (
      firstName &&
      email &&
      password &&
      konfimasiPassword &&
      provinsi &&
      kota &&
      kecamatan &&
      alamatLengkap &&
      kodePos
    ) {
      const data = {
        firstName,
        lastName,
        email,
        password,
        nomorTelepon,
        tanggalLahir,
        jenisKelamin,
        provinsi,
        kota,
        kecamatan,
        alamatLengkap,
        kodePos,
      };
      try {
        await axios.post("http://localhost:8080/users/register", data);
        alert("berhasil login!");
        navigate("/login");
      } catch (error) {
        alert(error.response.message);
      }
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center px-3 max-w-md ">
        <div>
          <h1 className="text-3xl font-bold py-4">Registrasi Member</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label>Nama Depan</label>
            <input
              type="text"
              name="firstName"
              placeholder="-"
              className="border-2 rounded-lg px-2 h-8"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label>Nama Belakang</label>
            <input
              type="text"
              name="lastName"
              placeholder="-"
              className="border-2 rounded-lg px-2 h-8"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 pt-2 ">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="-"
              className="border-2 rounded-lg px-2 h-8"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Nomor Telepon</label>
            <input
              type="tel"
              name="phone"
              placeholder="-"
              className="border-2 rounded-lg px-2 h-8 "
              value={nomorTelepon}
              onChange={(e) => setNomorTelepon(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="-"
              className="border-2 rounded-lg px-2 h-8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Konfirmasi Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="-"
              className={
                konfimasiPassword !== password
                  ? "border-2 border-red-700 rounded-lg px-2 h-8"
                  : "border-2 rounded-lg px-2 h-8"
              }
              value={konfimasiPassword}
              onChange={(e) => setKonfirmasiPassword(e.target.value)}
            />
            <label>Tanggal Lahir</label>
            <input
              type="date"
              name="tanggal lahir"
              placeholder="-"
              className="border-2 rounded-lg px-2 h-8"
              value={tanggalLahir}
              onChange={(e) => setTanggalLahir(e.target.value)}
            />
            <label htmlFor="kelamin">Jenis Kelamin</label>
            <select
              name="jeniskelamin"
              id="kelamin"
              className="border-2 rounded-lg px-2 h-8"
              onChange={(e) => setJenisKelamin(e.target.value)}
            >
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            <label>Provinsi</label>
            <input
              type="text"
              name="provinsi"
              placeholder="-"
              className="border-2 rounded-lg px-2 h-8"
              value={provinsi}
              onChange={(e) => setProvinsi(e.target.value)}
            />
            <label>Kota</label>
            <input
              type="text"
              name="kota"
              placeholder="-"
              className="border-2 rounded-lg px-2 h-8"
              value={kota}
              onChange={(e) => setKota(e.target.value)}
            />
            <label>Kecamatan</label>
            <input
              type="text"
              name="kecamatan"
              placeholder="-"
              className="border-2 rounded-lg px-2 h-8"
              value={kecamatan}
              onChange={(e) => setKecamatan(e.target.value)}
            />
            <label>Alamat Lengkap</label>
            <input
              type="textarea"
              name="alamatLengkap"
              placeholder="-"
              className="border-2 rounded-lg px-2 h-8"
              value={alamatLengkap}
              onChange={(e) => setAlamatLengkap(e.target.value)}
            />
            <label>Kode Pos</label>
            <input
              type="text"
              name="kodepos"
              placeholder="-"
              className="border-2 rounded-lg px-2 h-8"
              value={kodePos}
              onChange={(e) => setKodePos(e.target.value)}
            />
          </div>
          {/* <div className="flex gap-2 py-5">
            <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
            <span>
              I agree all statements in{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                terms of service
              </a>
            </span>
          </div> */}
          <div className=" flex flex-col gap-3">
            {!firstName &&
            !email &&
            !password &&
            !konfimasiPassword &&
            !provinsi &&
            !kota &&
            !kecamatan &&
            !alamatLengkap &&
            !kodePos ? (
              <button
                disabled
                type="submit"
                className="py-3 text-md text-white duration-200 bg-gray-400 rounded-2xl hover:cursor-not-allowed"
              >
                Create Accout
              </button>
            ) : (
              <button
                type="submit"
                className="py-3 text-md text-white duration-200 bg-blue-600 rounded-2xl hover:scale-105"
              >
                Create Accout
              </button>
            )}
          </div>
        </form>

        <div className="py-3 text-center ">
          <p>
            Sudah Punya Akun?{" "}
            <Link to="/login">
              {" "}
              <button className="text-blue-600">Login</button>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
