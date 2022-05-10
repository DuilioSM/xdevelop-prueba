import { IoExtensionPuzzle } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <IoExtensionPuzzle />
      <ul>
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
