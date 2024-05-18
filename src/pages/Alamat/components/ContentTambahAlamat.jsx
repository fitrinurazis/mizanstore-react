import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { infoMe } from "../../../store/action/authAction";
import { createNewAlamat } from "../../../store/action/alamatAction";
import { Link, useNavigate } from "react-router-dom";

const ContentTambahAlamat = () => {
  const { user, token } = useSelector((state) => state.auth);
  const { alamat } = useSelector((state) => state.alamat);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    firstName: "",
    lastName: "",
    nomorTelepon: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    alamatLengkap: "",
    kodePos: "",
    pelangganId: user?.users?.id,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !users.firstName ||
      !users.nomorTelepon ||
      !users.provinsi ||
      !users.kota ||
      !users.kecamatan ||
      !users.alamatLengkap ||
      !users.kodePos
    )
      alert("field must not empty");
    if (
      users.firstName &&
      users.nomorTelepon &&
      users.provinsi &&
      users.kota &&
      users.kecamatan &&
      users.alamatLengkap &&
      users.kodePos
    ) {
      try {
        dispatch(createNewAlamat(users));
        alert(alamat?.data?.message);
        navigate("/pelanggan/dashboard/alamat");
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    (async () => {
      if (token) dispatch(infoMe());
    })();
  }, [token, dispatch]);
  return (
    <>
      <div className="px-3 mx-w-auto">
        <h6 className="text-xl font-medium">Tambah Alamat</h6>
        <hr className="border-[1px] border-gray-200 mb-3" />
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm font-base">
              Nama Depan
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="w-full h-8 border-[1px] border-gray-400 pl-4"
              value={users.firstName}
              onChange={(e) => {
                setUsers({
                  ...users,
                  firstName: e.target.value,
                });
              }}
              required
            />
            <label htmlFor="lastName" className="text-sm font-base">
              Nama Belakang
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="w-full h-8 border-[1px] border-gray-400 pl-4"
              value={users.lastName}
              onChange={(e) => {
                setUsers({
                  ...users,
                  lastName: e.target.value,
                });
              }}
            />
            <label htmlFor="nomorTelepon" className="text-sm font-base">
              Nomor Telepon
            </label>
            <input
              type="number"
              name="nomorTelepon"
              id="nomorTelepon"
              className="w-full h-8 border-[1px] border-gray-400 pl-4"
              value={users.nomorTelepon}
              onChange={(e) => {
                setUsers({
                  ...users,
                  nomorTelepon: e.target.value,
                });
              }}
              required
            />
            <label htmlFor="provinsi" className="text-sm font-base">
              Provinsi
            </label>
            <input
              type="text"
              name="provinsi"
              id="provinsi"
              className="w-full h-8 border-[1px] border-gray-400 pl-4"
              value={users.provinsi}
              onChange={(e) => {
                setUsers({
                  ...users,
                  provinsi: e.target.value,
                });
              }}
              required
            />
            <label htmlFor="kota" className="text-sm font-base">
              Kota
            </label>
            <input
              type="text"
              name="kota"
              id="kota"
              className="w-full h-8 border-[1px] border-gray-400 pl-4"
              value={users.kota}
              onChange={(e) => {
                setUsers({
                  ...users,
                  kota: e.target.value,
                });
              }}
              required
            />
            <label htmlFor="kecamatan" className="text-sm font-base">
              Kecamatan
            </label>
            <input
              type="text"
              name="kecamatan"
              id="kecamatan"
              className="w-full h-8 border-[1px] border-gray-400 pl-4"
              value={users.kecamatan}
              onChange={(e) => {
                setUsers({
                  ...users,
                  kecamatan: e.target.value,
                });
              }}
              required
            />
            <label htmlFor="alamatLengkap" className="text-sm font-base">
              Alamat Lengkap
            </label>
            <input
              type="textarea"
              name="alamatLengkap"
              id="alamatLengkap"
              className="w-full h-8 border-[1px] border-gray-400 pl-4"
              value={users.alamatLengkap}
              onChange={(e) => {
                setUsers({
                  ...users,
                  alamatLengkap: e.target.value,
                });
              }}
              required
            />
            <label htmlFor="kodePos" className="text-sm font-base">
              Kode Pos
            </label>
            <input
              type="number"
              name="kodePos"
              id="kodePos"
              className="w-full h-8 border-[1px] border-gray-400 pl-4"
              value={users.kodePos}
              onChange={(e) => {
                setUsers({
                  ...users,
                  kodePos: e.target.value,
                });
              }}
              required
            />
          </div>
          <div className="inline-flex gap-1 mt-5">
            <Link to={"/pelanggan/dashboard/alamat"}>
              <button
                type="button"
                className="bg-white text-center px-3 py-1 border-[1px] border-gray-600 rounded-md hover:bg-gray-400 hover:duration-700"
              >
                Batal
              </button>
            </Link>
            <button
              type="submit"
              className="text-center text-white bg-blue-600 px-5 py-1 rounded-md hover:bg-blue-900 hover:duration-700"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContentTambahAlamat;
