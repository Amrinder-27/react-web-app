import Shimmer from "./Shimmer";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { CARDTYPE } from "../Utils/constant";
const RestaurantMenu = () => {
  const { resId } = useParams();
  // created custom hooks to abstract the data from api.
  const resInfo = useRestaurantMenu(resId);
  const [showIndexItems, setShowItems] = useState(1);
  //console.log(resInfo, 'resinfo')
  //const {name, cuisines, availabilityServiceabilityMessage} = resInfo.data.cards[2].card.card.info;
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card.card?.["@type"] === CARDTYPE
    );
  if (resInfo === null) return <Shimmer />;
  return (
    <div className="text-center">
      <h1 className="font-bold p-2 m-2 text-2xl">
        {resInfo?.data?.cards[2]?.card.card.info.name}
      </h1>

      <ul>
        <li>{resInfo?.data?.cards[2]?.card.card.info.cuisines.join(",")}</li>
      </ul>

      {categories.map((category, index) => (
        <RestaurantCategory
          catData={category}
          showItems={index === showIndexItems ? true : false}
          setShowItems={() => {
            setShowItems(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
