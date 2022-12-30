import React from "react";
import "../assets/styles/Testimonial.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import quote from "../assets/images/quote.svg";
import avatar from "../assets/images/avatar.jpg";
import starEmpty from "../assets/images/star-empty.svg";
import starFull from "../assets/images/star-full.svg";
import mapaBackground from "../assets/images/mapa-fondo.png";

export const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const { index, active } = rest;
    const carouselItems = [];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={active ? "active" : "inactive"}
        style={{
          border: "2px solid #fbc027",
          width: "20px",
          height: "20px",
          cursor: "pointer",
        }}
        onClick={() => onClick()}
      >
        {React.Children.toArray(carouselItems)[index]}
      </button>
    );
  };

  return (
    <div
      className="testimonial-area"
      style={{ backgroundImage: `url(${mapaBackground})` }}
    >
      <div className="testimonial">
        <div className="testimonial-title">
          <div className="line-container destinos-line-container">
            <div className="line" />
            <h3 className="line-title">TESTIMONIOS</h3>
          </div>
          <div>
            <h2>
              Los Clientes
              <span className="yellow-letter"> Hablan </span>
            </h2>
            <div className="mobile-line">
              <div className="mobile-line-white" />
            </div>
          </div>
          <p>
            En esta seccion podras ver algunos de los testimonios de nuestros
            clientes a lo largo de los anos ofreciendo nuestro servicio
          </p>
        </div>
        <div className="testimonial-people">
          <Carousel
            additionalTransfrom={0}
            autoPlaySpeed={2000}
            centerMode={false}
            className=""
            containerClass="container"
            responsive={responsive}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            rewind={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
            autoPlay
            customDot={<CustomDot />}
          >
            <div className="testimonial-box">
              <div className="testimonial-box-text">
                <img src={quote} alt="" />
                <p>
                  La mejor empresa con la que he realizado un envio desde
                  Estados Unidos a Venezuela, todo llego super rapido.
                </p>
              </div>
              <div className="testimonial-box-person">
                <img src={avatar} alt="" className="box-avatar" />
                <div className="box-person-name">
                  <h4>Yosbelis Rodriguez</h4>
                  <div className="box-stars">
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starEmpty} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="testimonial-box-text">
                <img src={quote} alt="" />
                <p>
                  La mejor empresa con la que he realizado un envio desde
                  Estados Unidos a Venezuela, todo llego super rapido.
                </p>
              </div>
              <div className="testimonial-box-person">
                <img src={avatar} alt="" className="box-avatar" />
                <div className="box-person-name">
                  <h4>Yosbelis Rodriguez</h4>
                  <div className="box-stars">
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starEmpty} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="testimonial-box-text">
                <img src={quote} alt="" />
                <p>
                  La mejor empresa con la que he realizado un envio desde
                  Estados Unidos a Venezuela, todo llego super rapido.
                </p>
              </div>
              <div className="testimonial-box-person">
                <img src={avatar} alt="" className="box-avatar" />
                <div className="box-person-name">
                  <h4>Yosbelis Rodriguez</h4>
                  <div className="box-stars">
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starEmpty} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="testimonial-box-text">
                <img src={quote} alt="" />
                <p>
                  La mejor empresa con la que he realizado un envio desde
                  Estados Unidos a Venezuela, todo llego super rapido.
                </p>
              </div>
              <div className="testimonial-box-person">
                <img src={avatar} alt="" className="box-avatar" />
                <div className="box-person-name">
                  <h4>Yosbelis Rodriguez</h4>
                  <div className="box-stars">
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starEmpty} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="testimonial-box-text">
                <img src={quote} alt="" />
                <p>
                  La mejor empresa con la que he realizado un envio desde
                  Estados Unidos a Venezuela, todo llego super rapido.
                </p>
              </div>
              <div className="testimonial-box-person">
                <img src={avatar} alt="" className="box-avatar" />
                <div className="box-person-name">
                  <h4>Yosbelis Rodriguez</h4>
                  <div className="box-stars">
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starEmpty} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="testimonial-box-text">
                <img src={quote} alt="" />
                <p>
                  La mejor empresa con la que he realizado un envio desde
                  Estados Unidos a Venezuela, todo llego super rapido.
                </p>
              </div>
              <div className="testimonial-box-person">
                <img src={avatar} alt="" className="box-avatar" />
                <div className="box-person-name">
                  <h4>JOSE Rodriguez</h4>
                  <div className="box-stars">
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starFull} alt="" />
                    <img className="box-star" src={starEmpty} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
