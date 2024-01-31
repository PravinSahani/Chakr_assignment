import React from "react";
import TopCards from "../Topcards/TopCards";
import CustomersCard from "../Customers/CustomersCard";
import Graph from "../Graph/Graph";
import "../Contents/Content.css";
import Chats from "../Chats/Chats";
import TopStates from "../TopStates/TopStates";
import Deals from "../Deals/Deals";
export default function Content() {
  return (
    <div>
      <TopCards />
      <div className="Main-card-container">
        <div className="customer-card">
          <CustomersCard />
        </div>
        <div className="graph-card">
          <Graph />
        </div>
      </div>
      <div className="Bottom-container">
        <div className="chats-container">
          <Chats />
        </div>
        <div className="states-container">
          <TopStates />
        </div>
        <div className="deals-container">
          <Deals />
        </div>
      </div>
    </div>
  );
}
