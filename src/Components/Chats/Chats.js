import React from "react";
import "../Chats/Chats.css";
import { appConfigData } from "../../Appconfig/Appconfig";
export default function Chats() {
  return (
    <div className="chats-card">
      <div className="chats-header">
        <h4>Chats</h4>
        <p>2 unread messages</p>
      </div>
      <div className="chats-avatar">
        {appConfigData?.chatsItem?.map((item, index) => {
          return (
            <div key={index} className="avatar-inner">
              <img
                src={item}
                alt=""
                style={{ width: "32px", height: "32px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
