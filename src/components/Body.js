import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserOnlineContext from "../Utils/UserOnlineContext";
import { SWIGGY_URL, RESTAURANT_URL } from "../Utils/constant";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRest, setFilterListofRest] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const allRestData = await data.json();
    setListOfRestaurants(
      allRestData.data?.cards[1]?.card?.card.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterListofRest(
      allRestData.data?.cards[1]?.card?.card.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // console.log(listOfRestaurants);
  const restaurantCardwithPromoted = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();
  /** updating useronlinecontext values by passing setUsername ijn the aPP.JS FILE */
  const { setUserName, userLogged } = useContext(UserOnlineContext);
  if (onlineStatus === false)
    return <div className = "w-6/12 mx-auto text-center m-3 p-3"><h2>Please check your internet connection !!</h2></div>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-20 mx-auto ">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black px-1 py-2"
            placeholder="search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-4 bg-green-50 px-4 py-3 m-4 rounded-lg"
            onClick={() => {
              const searchList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilterListofRest(searchList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex search m-4 p-4 items-center">
          <button
            className="px-4 py-1 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.avgRating > 4
              );
              setFilterListofRest(filteredList);
            }}
          >
            filter by top rated
          </button>
        </div>

        <div className="flex search m-4 p-4 items-center">
          <label>UserName: </label>
          <input
            className="border border-black p-2 m-1"
            value={userLogged}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRest.map((restaurants) => (
          <Link
            to={"/" + RESTAURANT_URL + "/" + restaurants.info.id}
            key={restaurants.info.id}
          >
            {restaurants.info.promoted ? (
              <restaurantCardwithPromoted resData={restaurants} />
            ) : (
              <RestaurantCard resData={restaurants} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
