import React, { Component } from "react";
import "./Home.css";

import ImageSlider from "../Slider/ImageSlider";
import { Link } from "react-router-dom";
import Tabsprodact from "../tabs/Tabsprodact";
import { getAll } from "../../API/prodactAPI";

const http = new XMLHttpRequest();
http.onreadystatechange = function () {
  if (this.readyState === 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    console.log(myObj);
  }
};
http.open("GET", "../../API/prodacts.json", true);
http.send();
class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    prodact: [],
  };
  componentDidMount() {
    getAll().then((prodact) => {
      this.setState({
        prodact,
      });
    });
  }
  render() {
    return (
      <div>
        <ImageSlider />
        <TowProdact prodact={this.state.prodact} />
        <Tabsprodact />
      </div>
    );
  }
}
const TowProdact = (props) => {
  const img1 = props.prodact[0];

  return (
    <div className="fams">
      <div className="container">
        <div className="list-prodact ">
          <div className="left-prodact">
            <div className="div-img">
              <img src="/images/collection_02.png" />
            </div>
            <div className="infoProdact ">
              <p>Phone Device Presets</p>
              <h3>SMARTPHONES</h3>
              <Link className="SHOP">SHOP NOW</Link>
            </div>
          </div>
          <div className="left-prodact   ">
            <div className="div-img">
              <img src="/images/collection_01.png" />
            </div>
            <div className="infoProdact">
              <p>Phone Device Presets</p>
              <h3>HEADPHONES</h3>
              <Link className="SHOP">SHOP NOW</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
