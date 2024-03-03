import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="content-footer">
        <div className="partner-idea">
          <div className="partner">
            <img src="img/partner1.png"></img>
          </div>
          <div className="idea">
            <img src="img/MS-FOOTER-IDEA.jpg" alt="" />
          </div>
        </div>
        <div className="list-boxes">
          <div className="contact">
            <div className="logo">
              <a title="logo" href="">
                <img src="./img/logo-mizanstore-bawah.png" alt="" />
              </a>
            </div>
            <div className="home">
              <img src="./img/icons8-home-64.png" alt="" />
              <span>PT. Millennia Tijara Semesta</span>
              <p>Jl. Joe No. 11</p>
              <p>Jagakarsa, Jakarta Selatan</p>
              <p>Indonesia - 12610</p>
            </div>
            <div className="whatsapp">
              <a href="">
                <img src="./img/icons8-whatsapp-50.png" alt="" />
                <span>Whatsapp</span>
              </a>
            </div>
            <div className="mail">
              <img src="./img/icons8-mail-50.png" alt="" />
              <span>cs@mizan.com</span>
            </div>
          </div>
          <ul className="list-box">
            <li className="list-name">MIZANSTORE</li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs"> </i>Tentang
                Mizanstore
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Affiliate Program
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Official Blog
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Print On Demand POD
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Daftar Penerbit
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Jadi Reseller
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Info Karier
              </a>
            </li>
          </ul>
          <ul className="list-box">
            <li className="list-name">BANTUAN</li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs"> </i>FAQ
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Konfirmasi Pembayaran
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Lacak Pesanan
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Cara Belanja
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Syarat Dan Ketentuan
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Kebijakan Privasi
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Kebijakan Pengembalian
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Kebijakan Pengiriman Barang
              </a>
            </li>
          </ul>
          <ul className="list-box">
            <li className="list-name">IKUTI KAMI</li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs"> </i>Facebook
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Twitter
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Instagram
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Line Official
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Whatsapp
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chevron-right fa-2xs" />
                Youtube Mizanstore
              </a>
            </li>
          </ul>
          <ul className="input-box">
            <li className="title-input">INFO PROMO DAN DISKON</li>
            <li>
              <p className="info">
                Dapatkan info promo serta diskon <br />
                spesial dari Mizanstore
              </p>
            </li>
            <li>
              <input
                type="text"
                name=""
                id=""
                placeholder="Masukkan email anda"
              />
            </li>
            <li>
              <button type="submit">Submit</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
