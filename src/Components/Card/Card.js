import React, { Component } from "react";

import { connect } from "react-redux";
import CardItem from "./CardItem";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.props.cardItem.map((item, index) => (
              <div key={index} className={"col-md-3 col-sm-4 col-xs-6 "}>
                <CardItem item={item} index={index} />
              </div>
            ))}
          </div>
          <div>
            <br />
            <h1> Total : $ {this.props.total}</h1>
            <br />
            <button className="btn btn-primary w-100 p-3"> BUY ALL</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardItem: state.card,
    total: state.card.reduce(
      (total, item) => total + item.Quantity * item.prodact.price,
      0
    ),
  };
};
export default connect(mapStateToProps)(Card);
