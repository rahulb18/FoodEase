import { useEffect, useState } from "react";
import RestrauntCard from "./RestruarantCard";

const restrauntList = [
  {
    name: "Burger King",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rtjnmtcoldygsgxb2dub",
    cusines: ["Burger", "American"],
    rating: "4.2",
  },
];

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4464732&lng=73.826375&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <>
      <div>
        <label>Search Restaurants: </label>
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </div>
      <div className="restaurant-list">
        {allRestaurants.map((restaurant) => {
          return (
            <RestrauntCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
