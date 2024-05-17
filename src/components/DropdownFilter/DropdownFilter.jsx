/* eslint-disable react/prop-types */
const DropdownFilter = ({ value, setValue }) => {
  return (
    <div>
      <h4 className="text-[#1e293d] font-sans">Urutkan:</h4>
      <div className="flex justify-start ml-[1em] pb-[24px]">
        <select
          name="list"
          id="list"
          className="border"
          value={value}
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
          }}
        >
          <option value="terbaru">Produk Terbaru</option>
          <option value="ascending">Nama Produk (A-Z)</option>
          <option value="rendah">Harga Terendah</option>
          <option value="tinggi">Harga Tertinggi</option>
        </select>
      </div>
    </div>
  );
};

export default DropdownFilter;
