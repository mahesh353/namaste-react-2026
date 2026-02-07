import resList from "../../utils/mockData";

import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";

const filteredResList = resList.filter(restaurant => restaurant.card.card.info.avgRating >= 4.1);
const Body = () => {

  const [searchText, setSearchText] = useState("");

  const [restaurantList, setrestaurantList] = useState("");

  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = async () => {
  
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.634379&lng=73.7474179&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const jsonData = await data.json();
    console.log(jsonData);
    //console.log(jsonData.data.cards[8]);
    
  }


  return (
    <div className="body">
      <div className="filter">
        <input type="text" className="search-box" placeholder="Search for restaurants..." />
        <button className="filter-btn" onClick={()=>{console.log("clicked")}}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            resData={restaurant}
            key={restaurant.card.card.info.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
