import "./Header.scss";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom"
import { navbarItems } from "../../Utils/Constants";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt={"Logo"} className="logo" />
        </Link>
      </div>
      <ul className="navigation">

        {navbarItems.map((navbarItem) => (
          <li key={navbarItem.slug} className="navigation-item">
            <Link to={`/${navbarItem.slug}`}>
              {navbarItem.name}
            </Link>
          </li>
        ))}


      </ul>
    </nav>
  );
};

export default Header;
