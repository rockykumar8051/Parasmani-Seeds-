import React from "react";

import "./css/header.css";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <div>
      <footer
        className="page-footer font-small  lighten-3 "
        style={{ backgroundColor: "rgba(31,43,59,0.92)", marginTop: "50px" }}
      >
        <div className="container-fluid pt-4 footer-col">
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                <h5 className="font-weight-bold text-uppercase mb-4">
                  <Link to="/" className="navbar-brand logo">
                    <img src="img/Logo1.png" alt="logo" className="img-fluid" />
                  </Link>
                </h5>
                <p>
                  Parasmani Seeds is a leading Indian agriculture company that
                  specializes in producing quality improved and hybrid seeds.
                </p>
              </div>
              <hr className="clearfix w-100 d-md-none" />
              <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                <h5 className="font-weight-bold text-uppercase mb-4">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <p>
                      <Link to="/">Home</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/product">Products</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      <Link to="/about">About us</Link>
                    </p>
                  </li>
                  {/* <li>
                    <p>
                      <Link to="/contact">Contact</Link>
                    </p>
                  </li> */}
                </ul>
              </div>
              <hr className="clearfix w-100 d-md-none"></hr>
              <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                <h5 className="font-weight-bold text-uppercase mb-4">
                  Address
                </h5>

                <ul className="list-unstyled">
                  <li>
                    <p>
                      <i className="fa fa-home mr-3"></i> Kushwaha Nagar,
                      Mirzapur-231001(UP)
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        href="mailto:info@parasmaniseeds.com"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        {" "}
                        <i className="fa fa-envelope mx-1"></i>
                        info@parasmaniseeds.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        href="tel: +91 9415288134"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        {" "}
                        <i className="fa fa-phone mr-3"></i> +91 9415288134
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <hr className="clearfix w-100 d-md-none"></hr>
              {/* <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
                <h5 className="font-weight-bold text-uppercase mb-4">
                  Follow Us
                </h5>
                <a type="button" className="btn-floating btn-fb">
                  <i className="fa fa-facebook-f"></i>
                </a>

                <a type="button" className="btn-floating btn-tw">
                  <i className="fa fa-twitter"></i>
                </a>

                <a type="button" className="btn-floating btn-gplus">
                  <i className="fa fa-google-plus-g"></i>
                </a>

                <a type="button" className="btn-floating btn-dribbble">
                  <i className="fa fa-dribbble"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>

      <div
        className=" container-fluid  footer-copyright text-center py-3"
        style={{ backgroundColor: " #111822", color: "#ccc" }}
      >
        © 2021 Copyright:
        <a
          href="https://www.linkedin.com/in/rocky-kumar-3b6209145/"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          {" "}
          Parasmani Seeds Pvt Ltd
        </a>
      </div>
    </div>
  );
}
