import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../component/css/slider.css";
import Products_details from "../data/products_data";
import category_details from "../data/category";

import React, { useState } from "react";

export default function Products() {
  const [item, setItem] = useState(Products_details);
  const [Cateitem, setCateItem] = useState(category_details);

  const [updatename, setname] = useState("All");

  const filterItem = (categItem) => {
    const updateItem = Products_details.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItem(updateItem);

    if (updateItem.length > 0) {
      setname(updateItem[0].category);
    } else {
      setname("No");
    }
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 4,
    pauseOnHover: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div>
      <div
        className="container-fluid  mt-4 topimg"
        style={{ backgroundColor: "white", padding: "0" }}
      >
        <img
          src="img/product.png"
          className="img-fluid"
          loading="lazy"
          alt=""
        />
      </div>
      <div className="text-center">
        <h1 className=" heading-title">
          {" "}
          <span>Our </span> Products
        </h1>
        <hr className="w-25 mx-auto line" />
        <div className="container-fluid bg-white ">
          <Slider {...settings} className="container logo-slider ">
            {Cateitem.map((elem) => {
              const { id, name, image } = elem;
              return (
                <>
                  <div className="item" key={id}>
                    <button onClick={() => filterItem(name)}>
                      <img key={id} src={image} alt={name} />
                      <p>{name}</p>
                    </button>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="text-center my-5">
        <h1 className=" heading-title" style={{ textTransform: "capitalize" }}>
          {" "}
          <span> {updatename} </span> Products
        </h1>
        <hr className="w-25 mx-auto line" />
        <div className="container ">
          <div className="row g-3 d-flex flex-wrap ">
            {item.map((elem) => {
              const { id, name, image, description } = elem;

              return (
                <>
                  <div className="col-md-4 col-10 col-xxl-4 col-lg-4 mx-auto">
                    <div className="card mb-3 shadow border-light p-2" key={id}>
                      <img
                        key={id}
                        src={image}
                        loading="lazy"
                        className="card-img-top img-fluid blog-img"
                        alt={name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
