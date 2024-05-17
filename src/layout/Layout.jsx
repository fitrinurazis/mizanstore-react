/* eslint-disable react/prop-types */
import Footer from "../pages/Footer/Footer";
import Header from "../pages/Header/Header";
import HomeBase from "../pages/HomeBase/HomeBase";

const Layout = ({ token, setToken }) => (
  <>
    <Header token={token} setToken={setToken} />
    <HomeBase />
    <Footer />
  </>
);

export default Layout;
