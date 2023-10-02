import "./Header.scss";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">Logo</div>
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
