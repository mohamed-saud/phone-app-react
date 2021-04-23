import React from "react";

import { connect } from "react-redux";
import CardItem from "./CardItem";

function Card(props) {
  console.log(props);
  return (
    <div>
      {props.cardItem.length != 0 ? (
        <div className="container">
          <div className="row">
            {props.cardItem.map((item, index) => (
              <div key={item.id} className={"col-md-3 col-sm-4 col-xs-6 "}>
                <CardItem item={item} index={index} />
              </div>
            ))}
          </div>
          <div>
            <br />
            <h1> Total : $ {props.total}</h1>
            <br />
            <button className="btn btn-primary w-100 p-3"> BUY ALL</button>
          </div>
        </div>
      ) : (
        <div>card is emty</div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cardItem: state.card,
    total: state.card.reduce(
      (total, item) => parseInt(total + item.quantity * item.prodact.price),
      0
    ),
  };
};
export default connect(mapStateToProps)(Card);
