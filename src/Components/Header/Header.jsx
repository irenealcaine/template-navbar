import "./Header.scss";
import logo from "../../Assets/Images/logo.png";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        <Link to={"/"}>
        <img src={logo} alt={"Logo"} className="logo" />
        </Link>
      </div>
      <ul className="navigation">
        <li className="navigation-item"><Link to={"/page1"}>
          Page 1
          </Link></li>
        <li className="navigation-item"><Link to={"/page2"}>
          Page 2
          </Link></li>
        <li className="navigation-item">
          <Link to={"/page3"}>
          Page 3
          </Link>
          </li>
        <li className="navigation-item"><Link to={"/page4"}>
          Page 4
          </Link></li>
      </ul>
    </nav>
  );
};

export default Header;
