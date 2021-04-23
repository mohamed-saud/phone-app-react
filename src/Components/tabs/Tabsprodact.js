import React, { useState } from "react";
import Category from "../Category/Category";
import "./Tabs.css";

const Tabsprodact = () => {
  const [toogelState, setToogelState] = useState(1);
  const toggelTabs = (indax) => {
    setToogelState(indax);
  };
  return (
    <div>
      <div className="all-tabs">
        <div className="container">
          <div className="tabs d-flex justify-content-center">
            <li
              className={toogelState == 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggelTabs(1)}
            >
              prodact
            </li>
            <li
              className={toogelState == 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggelTabs(2)}
            >
              prodact
            </li>
            <li
              className={toogelState == 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggelTabs(3)}
            >
              prodact
            </li>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className={toogelState == 1 ? "tabs active-contant" : "contant"}>
            <Category />
          </div>
          <div className={toogelState == 2 ? "tabs active-contant" : "contant"}>
            <Category />
          </div>
          <div className={toogelState == 3 ? "tabs active-contant" : "contant"}>
            <Category />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabsprodact;
