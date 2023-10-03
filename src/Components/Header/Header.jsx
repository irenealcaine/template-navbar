import "./Header.scss";
import logo from "../../Assets/Images/logo.png";
import { Link, useLocation } from "react-router-dom"
import { navbarItems } from "../../Utils/Constants";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {

  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuActiveClass = isMenuOpen ? "active" : "";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="header">
      <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
        <img src={logo} alt={"Logo"} className="logo" />
      </Link>

      <ul className={`navigation ${menuActiveClass}`}>
        {navbarItems.map((navbarItem) => (
          <li key={navbarItem.slug} onClick={() => setIsMenuOpen(false)}>
            <Link to={`/${navbarItem.slug}`} className={`navigation-item ${location.pathname === `/${navbarItem.slug}` && "active"}`} >
              {navbarItem.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className={`menu-toggle ${menuActiveClass}`} onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

    </nav>
  );
};

export default Header;
