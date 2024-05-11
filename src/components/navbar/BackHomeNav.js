
import { Link } from "react-router-dom";
import Logoimage from "../images/pfi2.png";
import "../Navigationbar.css"


const Navigationbar = () => {
  return (
    <div className="navigation">
      <nav className="main-nav w-full">
        {/* Logo name */}
        <div className="w-full">
            <Link to='/home' className="logo-link">
          <img className="logo-img h-20" src={Logoimage} alt="Logo"></img>
          <h1 className="text-white font-light my-4">Purva Fiber Industry</h1>
          </Link>
        </div>

        {/* Menu links that is Navigation */}
        {/* <div className="menu-links">
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
           </ul>
        </div> */}
        </nav>
    </div>
  );
};

export default Navigationbar;
