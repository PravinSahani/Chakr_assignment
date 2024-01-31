import React, { useEffect, useState } from "react";
import "../Customers/CustomersCard.css";
import { appConfigData } from "../../Appconfig/Appconfig";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function CustomersCard() {
  const [items, setItems] = useState(appConfigData.customerList);
  const [sortOption, setSortOption] = useState("newest");

  useEffect(() => {
    sortItems();
  }, [sortOption]);

  const sortItems = () => {
    const sortedItems = [...items];

    switch (sortOption) {
      case "newest":
        sortedItems.sort((a, b) => b.date - a.date);
        break;
      case "oldest":
        sortedItems.sort((a, b) => a.date - b.date);
        break;
      case "ascending":
        sortedItems.sort((a, b) => a.value - b.value);
        break;
      case "descending":
        sortedItems.sort((a, b) => b.value - a.value);
        break;
      default:
        sortedItems.sort((a, b) => b.date - a.date);
        break;
    }
    setItems(sortedItems);
  };

  return (
    <div className="customer-card-container">
      <div className="customer-card-header-container">
        <div className="customer-card-header">
          <h3>Customers</h3>
        </div>
        <div className="sort-by-container">
          <label htmlFor="sort">Sort By </label>
          <select
            className="select-input"
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <div key={index} className="customer-inner-card">
                <div className="avatar-container">
                  <img src={item.avatar} alt="Avatar" className="avatar" />
                </div>
                <div className="item-container">
                  <div className="name-container">
                    <h5>{item.name}</h5>
                    <p>{item.company}</p>
                  </div>
                  <div className="icon-container">
                    <div>{item.chatIcon}</div>
                    <div>{item.starIcon}</div>
                    <div>{item.editIcon}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="customer-card-footer">
        <button>All Customers</button>
        <span>
          <IoIosArrowRoundForward color="#c28109" />
        </span>
      </div>
    </div>
  );
}
