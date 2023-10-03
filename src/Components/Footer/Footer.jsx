import "./Footer.scss";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <nav className="footer">
      <ul className="footer-list">
        <li className="footer-item"><Link to={"/page1"}>
          Page 1
          </Link></li>
        <li className="footer-item"><Link to={"/page2"}>
          Page 2
          </Link></li>
        <li className="footer-item"><Link to={"/page3"}>
          Page 3
          </Link></li>
        <li className="footer-item"><Link to={"/page4"}>
          Page 4
          </Link></li>
      </ul>
    </nav>
  );
};

export default Footer;
