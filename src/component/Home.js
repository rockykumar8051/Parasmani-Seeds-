import "../App.css";
import { Link } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const speed = 10;

    counters.forEach((counter) => {
      const updCount = () => {
        counters.innerText = 0;
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const score = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + score);
          setTimeout(updCount, 100);
        } else {
          counter.innerText = target + "+";
        }
      };

      let countercontainer = document.querySelector(".counter-container");

      let option = {
        rootMargin: "0px 0px -200px 0px",
      };

      const sectionObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          updCount();
        }
      }, option);
      sectionObserver.observe(countercontainer);
    });
  }, []);
  return (
    <>
      <section className="carousel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="img/home3.png"
                loading="lazy"
                className="d-block w-100"
                alt="..."
              />
              {/* <div className="carousel-caption  d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div> */}
            </div>

            <div className="carousel-item">
              <img
                src="img/home2.png"
                loading="lazy"
                className="d-block w-100"
                alt="prod"
              />
              {/* <div className="carousel-caption d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div> */}
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="main-heading">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-12 py-3 text-center">
              <h1>
                <span>Let the first step </span> be firmly anchored!
              </h1>
              <p className="d-flex justify-content-center align-item-center">
                Parasmani Seeds is a leading Indian agriculture company that
                specializes in producing quality improved and hybrid seeds.
                Company has formulated in year 2005 and over in 15 years, Our
                seeds have burgeoned the lives of many million farmers, over one
                decades of operations. Over 1 million farmers put their faith on
                our products, every year. Our seeds are sown in a herculean area
                of over 1.5 Million acres of farm land.
              </p>
              <div className="col-xxl-12 text-center ">
                <Link to="/about">
                  <button type="button" className="btn ">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {<Productslider />} */}

      <section className="main-heading my-5  pt-2">
        <div className="text-center">
          <h1 className="display-4 heading-title">
            <span>Our</span> Popular Products
          </h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row g-3 d-flex flex-wrap ">
            <div className="col-md-4 col-10 col-xxl-4 col-lg-4 mx-auto">
              <div className="card mb-3 shadow-sm">
                <img
                  src="img/products/products1.png"
                  loading="lazy"
                  className="card-img-top img-fluid blog-img"
                  alt="blog"
                />
              </div>
            </div>
            <div className="col-md-4 col-10 col-xxl-4 col-lg-4 mx-auto">
              <div className="card mb-3 shadow-sm">
                <img
                  src="img/products/products2.png"
                  loading="lazy"
                  className="card-img-top img-fluid blog-img"
                  alt="blog"
                />
              </div>
            </div>
            <div className="col-md-4 col-10 col-xxl-4 col-lg-4 mx-auto">
              <div className="card mb-3 shadow-sm">
                <img
                  src="img/products/products4.png"
                  loading="lazy"
                  className="card-img-top img-fluid blog-img"
                  alt="blog"
                />
              </div>
            </div>
            <div className="col-md-4 col-10 col-xxl-4 col-lg-4 mx-auto">
              <div className="card mb-3 shadow-sm">
                <img
                  src="img/products/products3.png"
                  loading="lazy"
                  className="card-img-top img-fluid blog-img"
                  alt="blog"
                />
              </div>
            </div>
            <div className="col-md-4 col-10 col-xxl-4 col-lg-4 mx-auto">
              <div className="card mb-3 shadow-sm">
                <img
                  src="img/products/products5.png"
                  loading="lazy"
                  className="card-img-top img-fluid blog-img"
                  alt="blog"
                />
              </div>
            </div>
            <div className="col-md-4 col-10 col-xxl-4 col-lg-4 mx-auto">
              <div className="card mb-3 shadow-sm">
                <img
                  src="img/products/products1.png"
                  loading="lazy"
                  className="card-img-top img-fluid blog-img"
                  alt="blog"
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-12 text-center ">
            <Link to="/product">
              {" "}
              <button
                type="button"
                className="btn btn-lg "
                style={{ backgroundColor: "#77b81e" }}
              >
                View all
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid" style={{ backgroundColor: "#77b81e" }}>
          <div className="container">
            <div className="counter-container">
              <div className="content">
                <div className="counter" data-target="200">
                  0
                </div>
                <h3>ORGANIC ORCHARDS</h3>
              </div>
              <div className="content">
                <div className="counter" data-target="50">
                  0
                </div>
                <h3>PLANT NURSERIES</h3>
              </div>
              <div className="content">
                <div className="counter" data-target="500">
                  0
                </div>
                <h3>ENVIRONMENTALISTS</h3>
              </div>
              <div className="content">
                <div className="counter" data-target="20">
                  0
                </div>
                <h3>YEARS OF FARMING</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="main-heading my-5  pt-2">
        <div className="text-center">
          <h1 className="display-4 heading-title">
            <span>Our</span> Blogs
          </h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row g-3 d-flex flex-wrap ">
            <div className="col-md-4 col-10 col-xxl-4 col-lg-4 mx-auto">
              <div className="card mb-3">
                <img
                  src="img/blog1.png"
                  loading="lazy"
                  className="card-img-top img-fluid blog-img"
                  alt="blog"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <div className="col-xxl-12 ">
                    <button type="button" className="btn btn-outline-info ">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10 col-xxl-4 col-lg-4 mx-auto">
              <div className="card mb-3">
                <img
                  src="img/blog1.png"
                  loading="lazy"
                  className="card-img-top img-fluid blog-img"
                  alt="blog"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <div className="col-xxl-12 ">
                    <button type="button" className="btn btn-outline-info ">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10 col-xxl-4 col-lg-4 mx-auto">
              <div className="card mb-3">
                <img
                  src="img/blog2.png"
                  loading="lazy"
                  className="card-img-top img-fluid blog-img"
                  alt="blog"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <div className="col-xxl-12 ">
                    <button type="button" className="btn btn-outline-info ">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="form">
        <div className="card ">
          <img
            src="img/form-bg.png"
            className="card-img img-fluid  form-img"
            alt="fdbf"
          />
          <div className="card-img-overlay">
            <h5 className="card-title  mx-auto">
              <span style={{ color: "#77b81e" }}>Clarify Queries</span>{" "}
              <strong>Call Us Now!</strong>
            </h5>
            <div className="container form-container ">
              <div className="col-10 col-md-5 col-xxl-6">
                <label for="inputAddress" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-10 col-md-5 col-xxl-6">
                <label for="inputAddress2" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="col-md-5 col-xxl-6 col-10">
                <label for="inputCity" className="form-label">
                  Phone
                </label>
                <input type="number" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-4 col-xxl-4 col-8">
                <label for="inputState" className="form-label">
                  City
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Open this select city</option>
                  <option value="mzp">mzp</option>
                  <option value="mzp">mzp</option>
                </select>
              </div>
              <div className="col-12  mt-3">
                <button type="submit" className="btn btn-primary">
                  sumbit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
