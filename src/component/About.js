import React from "react";
import "./css/about.css";

function About() {
  return (
    <div>
      <div
        className="container-fluid  mt-4 topimg"
        style={{ backgroundColor: "white", padding: "0" }}
      >
        <img src="img/about.png" className="img-fluid" loading="lazy" alt="" />
      </div>

      <h1 className="d-flex justify-content-center align-item-center">
        About the Company
      </h1>
      <div className="container">
        <div className="about-content">
          <p className=" text pt-3">
            Parasmani Seeds is a leading Indian agriculture company that
            specializes in producing quality improved and hybrid seeds. Company
            has formulated in year 2005 and over in 15 years, Our seeds have
            burgeoned the lives of many million farmers, over one decades of
            operations. Over 1 million farmers put their faith on our products,
            every year. Our seeds are sown in a herculean area of over 1.5
            Million acres of farm land
          </p>
          <p className=" text pt-3">
            The trust of farmers has inspired us to adopt latest and best
            technologies for delivering better yields. Our continuous engagement
            with farmers helps us to understand their current and upcoming
            needs. Our team with advanced genetic engineering and breeding
            technologies create seeds of required attribute along with in-built
            biotic and abiotic stress resistance that suit varying agro climatic
            condition
          </p>
        </div>
      </div>

      <section
        className="container-fluid my-4"
        style={{ backgroundColor: "#77b81e" }}
      >
        <div className="container p-5 text-center">
          <h2>“ Everything we do, we do with quality ” Its our core value</h2>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 col-xxl-6  col-lg-6 col-12">
              <div className="card my-2 border-light">
                <div className="card-body shadow">
                  <h4 className="card-title text-center">Mission</h4>

                  <p className="card-text pt-1">
                    To revolutionize the field of agriculture through research
                    and development with integrated viable technologie
                  </p>
                  <p className="card-text pt-1">
                    To consistently upgrade the economic and technological
                    aspects of the farming community
                  </p>
                  <p className="card-text pt-1">
                    To be a vibrant force in the agri based industries and
                    facilitate sustainable prosperity for all its
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-6  col-lg-6 col-12">
              <div className="card  my-2 border-light">
                <div className="card-body shadow">
                  <h4 className="card-title text-center">Vision</h4>

                  <p className="card-text pt-2">
                    The consummation of our enterprise as a local leader and a
                    national compet
                  </p>
                  <p className="card-text pt-2">
                    The culmination of an enterprise endorsed with technological
                    reference for agriculture-based industrie
                  </p>
                  <p className="card-text pt-3">
                    A dedicated approach to always deliver products and services
                    of global standardsC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <h1 className="d-flex justify-content-center align-item-center">
            Our Founding Pillar
          </h1>
          <div className="text-center">
            <img
              style={{ width: "200px" }}
              src="img/founderImge.png"
              alt=" founder-img"
              className="rounded mx-auto d-block my-3"
            />

            <h4>
              <span>Shri Paras Nath</span>
            </h4>
            <h6>Founder : Parasmani Seeds Pvt Ltd</h6>
          </div>

          <div className="about-content">
            <p className="pt-1">
              Parasmani Seeds was envisioned and founded by Shri Paras Nath
              Kushwaha, President( UP Seeds business association) with a strong
              desire to serve the farmers and UP Seed trade members. Since then,
              he focused more in creating superior quality, high yielding seeds
              that adds value to the community.
            </p>
            <p>
              Our founder is committed to provide latest farming technology to
              Indian farmers in timely and cost-effective manner. His vision of
              quality seeds for every Indian farmer have led to build one of the
              leading seed brand of the country.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <h2 className="d-flex justify-content-center align-item-center">
            Contact us for any Query
          </h2>
        </div>
        <div className="d-flex justify-content-center align-item-center">
          <div className="col-md-4 col-xxl-4  col-lg-4 col-12">
            <div className="card border-light my-2">
              <div className="card-body shadow">
                <h4 className="card-title text-center">Address</h4>

                <p className="card-text">
                  <i className="fa fa-home mr-3"></i> Kushwaha Nagar,
                  Mirzapur-231001(UP)
                </p>
                <p className="card-text">
                  <a
                    href="mailto:someone@example.com"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <i className="fa fa-envelope mx-1"></i>
                    info@parasmaniseeds.com
                  </a>
                </p>
                <p className="card-text">
                  <a
                    href="tel: +91 94152881"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <i className="fa fa-phone mr-3"></i> +91 94152881
                  </a>
                </p>

                <a
                  href="https://maps.google.com/maps?ll=25.145676,82.573509&z=6&t=m&hl=en&gl=IN&mapclient=embed&cid=1776142153958496640"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="btn "
                    style={{ backgroundColor: "#77b81e" }}
                  >
                    View map
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
