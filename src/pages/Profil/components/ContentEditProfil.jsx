import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePelanggan } from "../../../store/action/pelangganAction";
import { Link } from "react-router-dom";
import axios from "axios";

const ContentEditProfil = () => {
  const params = useParams("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    nomorTelepon: "",
    tanggalLahir: "",
    jenisKelamin: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    alamatLengkap: "",
    kodePos: "",
  });

  const { firstName, lastName, nomorTelepon } = user;
  const fetchDetail = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `http://localhost:8080/users/detail/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (id) => {
    if (!user.firstName) {
      alert("field must not empty");
    }
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: user.email,
      password: user.password,
      nomorTelepon: nomorTelepon,
      tanggalLahir: user.tanggalLahir,
      jenisKelamin: user.jenisKelamin,
      provinsi: user.provinsi,
      kota: user.kota,
      kecamatan: user.kecamatan,
      alamatLengkap: user.alamatLengkap,
      kodePos: user.kodePos,
    };
    try {
      dispatch(updatePelanggan(id, data));
      alert("Berhasil Mengupdate Data!");
      navigate("/pelanggan/dashboard/profil");
    } catch (error) {
      alert("Gagal Mengupdate Data!", error);
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      fetchDetail();
    })();
  }, []);

  return (
    <>
      <div className="px-3 max-w-auto">
        <h6 className="text-xl mb-5">Update Profil</h6>
        <hr className="border-[1px] border-gray-200 mb-3" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(params.id);
          }}
        >
          <div className="flex flex-col ">
            <label htmlFor="firstName" className="text-lg font-bold">
              Nama Depan
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="w-full h-10 border-[1px] border-gray-400 pl-4"
              value={firstName}
              onChange={(e) => {
                setUser({
                  ...user,
                  firstName: e.target.value,
                });
              }}
              required
            />
            <label htmlFor="lastName" className="text-lg font-bold">
              Nama Belakang
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="w-full h-10 border-[1px] border-gray-400 pl-4"
              value={lastName}
              onChange={(e) => {
                setUser({
                  ...user,
                  lastName: e.target.value,
                });
              }}
            />
            <label htmlFor="nomorTelepon" className="text-lg font-bold">
              Nomor Telepon
            </label>
            <input
              type="text"
              name="nomorTelepon"
              id="nomorTelepon"
              className="w-full h-10 border-[1px] border-gray-400 pl-4"
              value={nomorTelepon}
              onChange={(e) =>
                setUser({
                  ...user,
                  nomorTelepon: e.target.value,
                })
              }
            />
          </div>
          <div className="inline-flex gap-1 mt-5">
            <Link to={"/pelanggan/dashboard/profil"}>
              <button
                type="button"
                className="bg-white text-center px-3 py-1 border-[1px] border-gray-600 rounded-md hover:bg-gray-400 hover:duration-700"
              >
                Batal
              </button>
            </Link>
            <button className="text-center text-white bg-blue-600 px-5 py-1 rounded-md hover:bg-blue-900 hover:duration-700">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContentEditProfil;
