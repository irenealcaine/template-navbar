import "./Header.scss";
import logo from "../../Assets/Images/logo.png";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        <img src={logo} alt={"Logo"} className="logo" />
      </div>
      <ul className="navigation">
        <li className="navigation-item">Page 1</li>
        <li className="navigation-item">Page 2</li>
        <li className="navigation-item">Page 3</li>
        <li className="navigation-item">Page 4</li>
      </ul>
    </nav>
  );
};

export default Header;
