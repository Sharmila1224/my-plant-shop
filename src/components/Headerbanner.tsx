import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Headerbanner() {
  const { cartCount } = useContext(CartContext);

  return (
    <>
      <div className="container-fluid bg-success"
        style={{
        background:
          "linear-gradient(30deg, #2e7d32, #66bb6a, #71d676ff, #66bb6a, #2e7d32)",
      }}>
        <header className="py-3">
          <ul
            className="nav nav-pills d-flex align-items-center justify-content-center gap-4 w-100"
            style={{ margin: 0, padding: 0, listStyle: "none" }}
          >
            <li className="nav-item">
              <Link to="/" className="text-decoration-none text-white fs-5 link-success">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/About" className="text-decoration-none text-white fs-5 link-success">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Shop" className="text-decoration-none text-white fs-5 link-success">
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Gallery" className="text-decoration-none text-white fs-5 link-success">
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Contant" className="text-decoration-none text-white fs-5 link-success">
                Contact
              </Link>
            </li>

            {/* PUSH ICONS TO RIGHT */}
            <li className="ms-auto position-relative ">
              <Link to="/cart" className="text-white link-success">
                <i className="fa fa-shopping-cart fa-2x "></i>

                {cartCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-6px",
                      right: "-10px",
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>

            <li>
              <Link to="/Signin">
                <i className="fa fa-sign-in text-white fa-2x link-success"></i>
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default Headerbanner;
