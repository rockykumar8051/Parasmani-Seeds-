// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../component/css/slider.css";
// import category_details from "../data/category";

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Products() {
//   // const [item, setItem] = useState(Products_details);
//   const [Cateitem, setCateItem] = useState(category_details);

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 5,
//     slidesToScroll: 4,
//     pauseOnHover: true,
//     autoplay: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true,
//         },
//       },
//     ],
//   };
//   return (
//     <div>
//       <div className="text-center">
//         <h1 className=" heading-title">
//           {" "}
//           <span>Our </span>Products
//         </h1>
//         <hr className="w-25 mx-auto line" />
//         <div className="container-fluid bg-white ">
//           <Slider {...settings} className="container logo-slider ">
//             {Cateitem.map((elem) => {
//               const { id, name, image } = elem;
//               return (
//                 <>
//                   <div className="item">
//                     <Link to="/product">
//                       {" "}
//                       <button>
//                         <img key={id} src={image} loading="lazy" alt={name} />
//                         <p>{name}</p>
//                       </button>
//                     </Link>
//                   </div>
//                 </>
//               );
//             })}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }
