import { navbarItems } from "../../Utils/Constants";
import "./Footer.scss";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <nav className="footer">
      <ul className="footer-list">

        {navbarItems.map((navbarItem) => (
          <li key={navbarItem.slug} className="footer-item">
            <Link to={`/${navbarItem.slug}`}>
              {navbarItem.name}
            </Link>
          </li>
        ))}

      </ul>
    </nav>
  );
};

export default Footer;
