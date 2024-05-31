import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = (props) => {
  const { catData } = props;

  const HandleClick = () => {
    /** toggling */

    /** controlled functions from parent component */
    props.setShowItems();
  };
  // const {itemCards} = props
  //console.log(catData)
  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto p-5 border-radius m-4  bg-gray-50">
        <div
          className="flex justify-between cursor-pointer"
          onClick={HandleClick}
        >
          <span className="font-bold p-1 pl-0 ml-0 m-2 text-xl">
            {catData.card.card.title} ({catData.card.card.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {props.showItems && <ItemList items={catData.card.card.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
