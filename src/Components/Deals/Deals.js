import React from "react";
import { appConfigData } from "../../Appconfig/Appconfig";
import "../Deals/Deals.css";
export default function Deals() {
  return (
    <div className="">
      <div className="chats-header">
        <h4>New Deals</h4>
      </div>
      <div className="deals-item-container">
        {appConfigData?.newDealsItem?.map((item, index) => {
          return (
            <div key={index} className="new-deals-item-container">
              <div className="new-deals-item">{item.icon}</div>
              <div className="new-deals-value">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
