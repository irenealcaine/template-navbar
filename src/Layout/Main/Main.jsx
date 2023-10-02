import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Main.scss";

const Main = ({ children }) => {
  return (
    <div className="main">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
