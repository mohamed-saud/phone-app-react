import React, { Component } from "react";
import "./category.css";
import { Link } from "react-router-dom";
import { getAll } from "../../API/prodactAPI";
import CircularProgress from "@material-ui/core/CircularProgress";
import Prodact from "../prodact/Prodact";

function CircularUnderLoad() {
  return <CircularProgress disableShrink />;
}

class Category extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    prodact: [],
    loding: true,
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
      <div className="container">
        <div className="row">
          {this.state.prodact.map((prod) => (
            <div key={prod.id} className={"col-md-3 col-sm-4 col-xs-6 "}>
              <Prodact
                image={prod.image}
                name={prod.name}
                price={prod.price}
                id={prod.id}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Category;
