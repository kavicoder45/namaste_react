import { LOGO } from "../utils/constant";

const Header = () => {
  return (
    <header>
      <div className="nav_center">
        <div className="logo">
          <img src={LOGO}></img>
        </div>
        <nav className="nav_links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
