import React from "react";
import "../Topcards/TopCards.css";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { appConfigData } from "../../Appconfig/Appconfig";

export default function TopCards() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
      {appConfigData?.topCardsItem?.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div
              className="top-cards"
              style={{
                width: item.cardWidth,
                marginLeft: item.ml,
                marginTop: item.mt,
                marginBottom: item.mb,
                marginRight: item.mr,
              }}
            >
              <div className="card-header-container">
                <h5 className="card-header">{item.header}</h5>
              </div>
              <div className="card-content">
                <div className={"inner-content"}>
                  <span className="top-card-text">{item.value}</span>
                  <span>{item.icon}</span>
                  <div>
                    <span style={{ fontSize: "14px", color: "#333333" }}>
                      {item.text}
                    </span>
                  </div>
                </div>
                <div className="top-card-btn">
                  <button>{item.btnName}</button>
                  <span>{item.btnIcon}</span>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
