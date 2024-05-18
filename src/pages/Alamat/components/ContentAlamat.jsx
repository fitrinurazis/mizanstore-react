import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { infoMe } from "../../../store/action/authAction";
import { Link } from "react-router-dom";
const ContentAlamat = () => {
  const { token, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (token) dispatch(infoMe());
    })();
  }, [token, dispatch]);

  const alamatLength = user?.users?.alamat?.length;

  return (
    <div className="px-3 max-w-auto">
      {alamatLength == 0 ? (
        <>
          <div className="flex flex-row justify-between">
            <h6 className="text-xl mb-5">Daftar Alamat</h6>
            <button className="hidden">
              <svg
                height="50px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 50 50"
                width="50px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="none" height="50" width="50" />
                <line
                  fill="none"
                  stroke="#000000"
                  x1="9"
                  x2="41"
                  y1="25"
                  y2="25"
                />
                <line
                  fill="none"
                  stroke="#000000"
                  x1="25"
                  x2="25"
                  y1="9"
                  y2="41"
                />
              </svg>
            </button>
          </div>
          <hr className="border-[1px] border-gray-200 mb-3" />
          <p className="text-lg">Anda Belum Pernah Menambahkan Alamat</p>
        </>
      ) : alamatLength != 0 ? (
        <>
          <div className="flex flex-row  justify-between">
            <h6 className="text-xl mb-5">Daftar Alamat</h6>
            <button
              type="button"
              className="bg-blue-800 text-white px-2 text-xs text-center inline-flex items-center rounded-lg font-medium hover:bg-blue-600 hover:duration-1000"
            >
              <svg
                height="17px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 50 50"
                width="17px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  x1="9"
                  x2="41"
                  y1="25"
                  y2="25"
                />
                <line
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  x1="25"
                  x2="25"
                  y1="9"
                  y2="41"
                />
              </svg>
              Tambah Alamat
            </button>
          </div>
          <div className="mt-2">
            <table
              id="tableAlamat"
              className="border-y-2 divide-y-2 w-[100%] pt-10"
            >
              <thead>
                <tr>
                  <td>No</td>
                  <td>Nama</td>
                  <td>Alamat Lengkap</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                {user?.users?.alamat?.map((item) => {
                  return (
                    <tr key={item.id} className="">
                      <td id="counterCell"></td>
                      <td>{item.firstName}</td>
                      <td>{item.alamatLengkap}</td>
                      <td className="inline-flex gap-1 items-center pt-1">
                        <Link
                          to={`/pelanggan/dashboard/alamat/detail/${item.id}`}
                        >
                          <button
                            type="button"
                            className="bg-green-600 w-10 h-8 px-3 inline-flex items-center rounded-lg hover:duration-700 hover:bg-green-700"
                          >
                            <svg
                              fill="white"
                              height="25px"
                              id="Layer_1"
                              version="1.1"
                              viewBox="0 0 512 512"
                              width="25px"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g>
                                <path d="M256,128c-81.9,0-145.7,48.8-224,128c67.4,67.7,124,128,224,128c99.9,0,173.4-76.4,224-126.6   C428.2,198.6,354.8,128,256,128z M256,347.3c-49.4,0-89.6-41-89.6-91.3c0-50.4,40.2-91.3,89.6-91.3s89.6,41,89.6,91.3   C345.6,306.4,305.4,347.3,256,347.3z" />
                                <g>
                                  <path d="M256,224c0-7.9,2.9-15.1,7.6-20.7c-2.5-0.4-5-0.6-7.6-0.6c-28.8,0-52.3,23.9-52.3,53.3c0,29.4,23.5,53.3,52.3,53.3    s52.3-23.9,52.3-53.3c0-2.3-0.2-4.6-0.4-6.9c-5.5,4.3-12.3,6.9-19.8,6.9C270.3,256,256,241.7,256,224z" />
                                </g>
                              </g>
                            </svg>
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="bg-yellow-400 w-10 h-8 px-3 inline-flex items-center rounded-lg hover:duration-700 hover:bg-yellow-600"
                        >
                          <svg
                            fill="white"
                            height="22px"
                            version="1.1"
                            viewBox="0 0 4.35 3.53"
                            width="27px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="Layer_x0020_1">
                              <path d="M4.2 0.29l0.01 0.01c0.11,0.16 0.16,0.35 0.13,0.53 -0.02,0.18 -0.12,0.35 -0.28,0.47l-2.95 2.22 -0.77 0.01c-0.05,0 -0.1,-0.01 -0.15,-0.04 -0.05,-0.02 -0.09,-0.05 -0.12,-0.1 -0.03,-0.04 -0.06,-0.09 -0.07,-0.14 0,-0.05 0,-0.1 0.02,-0.16l0.22 -0.73 2.95 -2.22c0.16,-0.12 0.35,-0.16 0.53,-0.13 0.19,0.02 0.36,0.12 0.48,0.28zm-0.96 0.26l0.45 0.59 0.16 -0.12c0.08,-0.06 0.13,-0.15 0.14,-0.24 0.01,-0.09 -0.01,-0.19 -0.07,-0.27l-0.01 -0.01c-0.06,-0.08 -0.14,-0.13 -0.24,-0.14 -0.09,-0.02 -0.18,0.01 -0.26,0.06l-0.17 0.13zm0.17 0.8l-0.45 -0.59 -2.19 1.65 0.44 0.59 2.2 -1.65zm-2.51 1.82l-0.38 -0.51 -0.16 0.52 0.54 -0.01z" />
                            </g>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ContentAlamat;
