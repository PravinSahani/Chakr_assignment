import React from "react";
import { appConfigData } from "../../Appconfig/Appconfig";
import "../TopStates/TopStates.css";
export default function TopStates() {
  return (
    <div className="chats-card">
      <div className="chats-header">
        <h4>Top states</h4>
      </div>
      <div className="state-inner-container">
        {appConfigData?.topStatesItem?.map((item, index) => {
          return (
            <div key={index} className="states" style={{ width: item.width }}>
              <div className="states-item">{item.label}</div>
              <div className="states-value">{item.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
