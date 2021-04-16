import React from "react";
import { Link } from "react-router-dom";
import img from "../images/banner_01.png";
import "./slider.css";

const ImageSlider = () => {
  return (
    <div className="containerSlid">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: "100%" }}>
          <div className="carousel-item active">
            <div className="carousell-item ">
              <div className="main-slider ">
                <div className="container">
                  <div className="slider">
                    <div className="hero__left ">
                      <div>
                        <span>New Inspiration 2020</span>
                        <h1>PHONES MADE FOR YOU!</h1>
                        <p>
                          Trending from mobile and headphone style collection
                        </p>
                        <Link to="#">
                          <button className="hero__btn">SHOP NOW</button>
                        </Link>
                      </div>
                    </div>
                    <div className="hero-right ">
                      <img src={img} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="carousell-item ">
              <div className="main-slider ">
                <div className="container">
                  <div className="slider">
                    <div className="hero__left">
                      <div>
                        <span>New Inspiration 2020</span>
                        <h1>PHONES MADE FOR YOU!</h1>
                        <p>
                          Trending from mobile and headphone style collection
                        </p>
                        <Link to="#">
                          <button className="hero__btn">SHOP NOW</button>
                        </Link>
                      </div>
                    </div>
                    <div className="hero-right ">
                      <img src={img} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="carousell-item ">
              <div className="main-slider ">
                <div className="container">
                  <div className="slider">
                    <div className="hero__left">
                      <div>
                        <span>New Inspiration 2020</span>
                        <h1>PHONES MADE FOR YOU!</h1>
                        <p>
                          Trending from mobile and headphone style collection
                        </p>
                        <Link to="#">
                          <button className="hero__btn">SHOP NOW</button>
                        </Link>
                      </div>
                    </div>
                    <div className="hero-right ">
                      <img src={img} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
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
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
