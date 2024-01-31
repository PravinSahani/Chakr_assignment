import React, { useState } from "react";
import { appConfigData } from "../../Appconfig/Appconfig";
import "../Sidebar/Sidebar.css";
import { TbSettings2 } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
import avatar from "../../Assets/Img/Avatar.png";
export default function Sidebar() {
  const [activePage, setActivePage] = useState("dashboard");
  const activeHandler = (name) => {
    const activePageName = appConfigData?.sidebarItems?.filter(
      (item, index) => {
        if (item.name.toLowerCase() === name.toLowerCase()) {
          return item.name;
        }
      }
    );
    setActivePage(activePageName[0].name.toLowerCase());
    try {
    } catch (e) {
      console.log("error in activeHandler", e);
    }
  };
  return (
    <div className="sidebar-content">
      <div className="sidebar-header">
        <h5>Orange Farm</h5>
      </div>
      <div className="sidebar-search-bar" style={{ paddingLeft: "8px" }}>
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <div className="sidebar-items">
        <ul>
          {appConfigData?.sidebarItems?.map((item, index) => {
            const isActive = activePage === item.name.toLowerCase();
            return (
              <React.Fragment key={index}>
                <div
                  className={`items hover-effect`}
                  onClick={() => activeHandler(item.name)}
                >
                  <span
                    className={`item-icon ${isActive ? "active-item" : ""}`}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.icon}
                  </span>
                  <li className={`sidebar-item ${isActive ? "active" : ""}`}>
                    {item.name}
                  </li>
                </div>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-avatar">
            <img src={avatar} style={{ width: "32px", height: "32px" }} />
          </div>
          <div className="profile-label">
            <h5>Gustavo Xavier</h5>
          </div>
        </div>
        <div className="sidebar-settings hover-effect">
          <div className="settings-icon">
            <TbSettings2 />
          </div>
          <div>
            <ul className="setting-ul">
              <li className="settings fonts">Settings</li>
            </ul>
          </div>
        </div>
        <div className="logout hover-effect">
          <div className="logout-icon">
            <IoLogOutOutline color="#FF0000" />
          </div>
          <ul className="logout-ul">
            <li className="fonts logout-btn">Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
