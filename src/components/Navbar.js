import { IoExtensionPuzzle } from "react-icons/io5";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <IoExtensionPuzzle />
      <ul className="navbar-links_container">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">ABOUT US</a>
        </li>
        <li>
          <a href="/">BLOG</a>
        </li>
        <li>
          <a href="/">HOW IT WORKS?</a>
        </li>
      </ul>
      <div>
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
