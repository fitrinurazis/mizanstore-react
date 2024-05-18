import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailAlamat } from "../../../store/action/alamatAction";

const ContentDetailAlamat = () => {
  const { detail } = useSelector((state) => state.alamat);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getDetailAlamat(params.id));
  }, [params, dispatch]);

  return (
    <>
      <div className="px-3 max-w-auto">
        <h6 className="text-xl mb-5 font-medium">Detail Alamat</h6>
        <hr className="border-[1px] border-gray-200 mb-3" />
        <table className="mt-3 border-2 border-collapse w-full text-left border-gray-300">
          <tbody>
            <tr>
              <td className="border border-gray-300 py-2 pl-2">Nama Depan</td>
              <td className="border border-gray-300 py-2 pl-2">
                {detail?.data?.firstName}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 pl-2">
                Nama Belakang
              </td>
              <td className="border border-gray-300 py-2 pl-2">
                {detail?.data?.lastName}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 pl-2">No.tlp/Hp</td>
              <td className="border border-gray-300 py-2 pl-2">
                {detail?.data?.nomorTelepon}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 pl-2">Provinsi</td>
              <td className="border border-gray-300 py-2 pl-2">
                {detail?.data?.provinsi}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 pl-2">
                Kota/Kabupaten
              </td>
              <td className="border border-gray-300 py-2 pl-2">
                {detail?.data?.kota}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 pl-2">Kecamatan</td>
              <td className="border border-gray-300 py-2 pl-2">
                {detail?.data?.kecamatan}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 pl-2">
                Alamat Lengkap
              </td>
              <td className="border border-gray-300 py-2 pl-2">
                {detail?.data?.alamatLengkap}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 pl-2">Kodepos</td>
              <td className="border border-gray-300 py-2 pl-2">
                {detail?.data?.kodePos}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContentDetailAlamat;
