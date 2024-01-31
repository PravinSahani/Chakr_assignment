import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Content from "../../Components/Contents/Content";
import "../Dashboard/Dashboard.css";
export default function Dashboard() {
  return (
    <div className="Dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="content-container">
        <Content />
        {/* <SemiCircle /> */}
      </div>
    </div>
  );
}
