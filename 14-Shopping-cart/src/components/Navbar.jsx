import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-router-dom"



const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <NavLink to="/">
          <div>
            <img src="data:image/png;base64,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" />
          </div>
        </NavLink>
        <div className="flex">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>

        </div>
      </div>
    </div>
  )
};

export default Navbar;
