import React, { Component } from "react";
import { getById } from "../../API/prodactAPI";
import "./ProdactDetals.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addToCart } from "../../Redux/actions/actins";
class ProdactDetals extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    loding: true,
    prodact: {},
    image: "",
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    getById(parseInt(id)).then((prodact) => {
      this.setState({
        prodact,
        loding: false,
        quantity: 1,
        imgage: this.state.prodact.image,
      });
    });
  }
  changeImg = (e) => {
    console.log(e.target.src);
    const img = e.target.src;
    this.setState({
      image: img,
    });
  };
  handelAmunt = (e) => {
    const val = e.target.value;
    this.setState({
      quantity: val,
    });
  };
  plus = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  };
  minus = () => {
    if (this.state.quantity === 1) {
    } else {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  };
  addToCart = (prodact, quantity) => {
    this.props.addToCart(prodact, quantity);
  };
  render() {
    const prodact = this.state.prodact;

    const quantity = this.state.quantity;

    return (
      <main id="main">
        <div className="container">
          <section className="section product-details__section">
            <div className="product-detail__container">
              <div className="product-detail__left">
                <div className="details__container--left">
                  <div className="product__pictures">
                    {prodact.image1 ? (
                      <div className="pictures__container">
                        <img
                          onClick={this.changeImg}
                          className="picture"
                          src={prodact.image1}
                          id="pic1"
                          alt=""
                        />
                      </div>
                    ) : null}
                    {prodact.image2 ? (
                      <div className="pictures__container">
                        <img
                          onClick={this.changeImg}
                          className="picture"
                          src={prodact.image2}
                          id="pic2"
                          alt=""
                        />
                      </div>
                    ) : null}
                    {prodact.image3 ? (
                      <div className="pictures__container">
                        <img
                          onClick={this.changeImg}
                          className="picture"
                          src={prodact.image3}
                          id="pic3"
                          alt=""
                        />
                      </div>
                    ) : null}
                    {prodact.image4 ? (
                      <div className="pictures__container">
                        <img
                          onClick={this.changeImg}
                          className="picture"
                          src={prodact.image4}
                          id="pic4"
                          alt=""
                        />
                      </div>
                    ) : null}
                    {prodact.image5 ? (
                      <div className="pictures__container">
                        <img
                          onClick={this.changeImg}
                          className="picture"
                          src={prodact.image5}
                          id="pic5"
                          alt=""
                        />
                      </div>
                    ) : null}
                  </div>
                  <div className="product__picture" id="product__picture">
                    <div className="rect" id="rect"></div>
                    <div className="picture__container">
                      <img
                        style={{ height: "430px" }}
                        src={
                          this.state.image ? this.state.image : prodact.image
                        }
                        id="pic"
                      />
                    </div>
                  </div>
                  <div className="zoom" id="zoom"></div>
                </div>
                <div className="product-details__btn">
                  <Link
                    to="/card"
                    onClick={() => this.addToCart(prodact, quantity)}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cart-plus-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                      </svg>
                    </span>
                    ADD TO CART
                  </Link>
                  <a className="buy" href="#">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-credit-card-2-back"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                      </svg>
                    </span>
                    BUY NOW
                  </a>
                </div>
              </div>
              <div className="product-detail__right">
                <div className="product-detail__content">
                  <h3>Apple iPhone XR</h3>
                  <div className="price">
                    <span className="new__price">${prodact.price}</span>
                  </div>
                  <div className="product__review">
                    <div className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-half"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                      </svg>
                    </div>
                    <a href="#" className="rating__quatity">
                      3 reviews
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt a doloribus iste natus et facere? dolor sit amet
                    consectetur adipisicing elit. Sunt a doloribus iste natus et
                    facere?
                  </p>
                  <div className="product__info-container">
                    <ul className="product__info">
                      <li className="select">
                        <div className="select__option">
                          <label htmlFor="colors">Color</label>
                          <select
                            name="colors"
                            id="colors"
                            className="select-box"
                          >
                            <option value="blue">blue</option>
                            <option value="red">red</option>
                          </select>
                        </div>
                        <div className="select__option">
                          <label htmlFor="size">Inches</label>
                          <select name="size" id="size" className="select-box">
                            <option value="6.65">6.65</option>
                            <option value="7.50">7.50</option>
                          </select>
                        </div>
                      </li>
                      <li>
                        <div className="input-counter">
                          <span>Quantity:</span>
                          <div>
                            <span className="minus-btn" onClick={this.minus}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-dash-square"
                                viewBox="0 0 16 16"
                              >
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                              </svg>
                            </span>
                            <input
                              onChange={this.handelAmunt}
                              type="text"
                              min="1"
                              value={this.state.quantity}
                              max="10"
                              className="counter-btn"
                            />
                            <span className="plus-btn" onClick={this.plus}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-plus-square"
                                viewBox="0 0 16 16"
                              >
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span>Subtotal:</span>
                        <a href="#" className="new__price">
                          ${quantity * prodact.price}
                        </a>
                      </li>
                      <li>
                        <span>Brand:</span>
                        <a href="#">Apple</a>
                      </li>
                      <li>
                        <span>Product Type:</span>
                        <a href="#">Phone</a>
                      </li>
                      <li>
                        <span>Availability:</span>
                        <a href="#" className="in-stock">
                          In Stock (7 Items)
                        </a>
                      </li>
                    </ul>
                    <div className="product-info__btn">
                      <a href="#">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-crop"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.5.5A.5.5 0 0 1 4 1v13h13a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2H3.5a.5.5 0 0 1-.5-.5V4H1a.5.5 0 0 1 0-1h2V1a.5.5 0 0 1 .5-.5zm2.5 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4H6.5a.5.5 0 0 1-.5-.5z" />
                          </svg>
                        </span>
                        &nbsp; SIZE GUIDE
                      </a>
                      <a href="#">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-truck"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </span>
                        &nbsp; SHIPPING
                      </a>
                      <a href="#">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-envelope-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                          </svg>
                          &nbsp;
                        </span>
                        ASK ABOUT THIS PRODUCT
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (prodactInfo, quantity) =>
      dispatch(addToCart(prodactInfo, quantity)),
  };
};
export default connect(null, mapDispatchToProps)(ProdactDetals);
