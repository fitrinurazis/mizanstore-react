import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { infoMe } from "../../../store/action/authAction";

const ContentProfil = () => {
  const { token, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (token) dispatch(infoMe());
    })();
  }, [token, dispatch]);
  return (
    <>
      <div className="px-3 max-w-auto">
        <h6 className="text-xl mb-5">Profil</h6>
        <hr className="border-[1px] border-gray-200 mb-3" />
        <table className="mt-5 w-[65%] ml-5 text-sm text-gray-600">
          <tr>
            <td>Nama Depan</td>
            <td>{user?.users?.firstName}</td>
          </tr>
          <tr>
            <td className="py-3">Nama Belakang</td>
            {user?.users?.lastName == null ? (
              <td></td>
            ) : (
              <td>{user?.users?.lastName}</td>
            )}
          </tr>
          <tr>
            <td>Telepon</td>
            {user?.users?.nomorTelepon == null ? (
              <td></td>
            ) : (
              <td>{user?.users?.nomorTelepon}</td>
            )}
          </tr>
        </table>
        <button className="h-9 w-20 bg-amber-500 my-5 rounded-md text-white text-sm hover:cursor-pointer">
          Edit Profil
        </button>
        <hr className="border-[1px] border-gray-200 mb-3" />
        <table className="mt-5 w-[65%] ml-5 text-sm text-gray-600">
          <tr>
            <td>Password</td>
            <td>**********</td>
          </tr>
        </table>
        <button className="h-9 w-24 bg-amber-500 mt-5 rounded-md text-white text-sm hover:cursor-pointer">
          Edit Password
        </button>
      </div>
    </>
  );
};

export default ContentProfil;
