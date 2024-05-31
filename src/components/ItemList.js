import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
const ItemList = ({ items }) => {
  console.log(items, "items");
  const dispatch = useDispatch();
  const HandleItem = (item) => {
    dispatch(addItem(item));
  };
  // const imagelink = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+list.card.info.ImageId
  //  const {name, price, description} = items.card?.info;
  return (
    <div>
      {items.map((list) => (
        <div key={list.card.info.id} className="w-full text-left">
          <div className="flex justify-between my-10">
            <div>
              <span className="font-bold text-xl p-5 pl-0">
                {list.card.info.name}
                (💲{list.card.info.price / 100})
              </span>
              <p className="m-4 pl-0 ml-0 text-xs">
                {list.card.info.description}
              </p>
            </div>
            <div className="w-24 relative">
              <span
                className="absolute top-0 left-0 p-2 bg-black rounded-lg cursor-pointer text-zinc-200 text-xs"
                onClick={() => HandleItem(list)}
              >
                Add +
              </span>
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  list.card.info.imageId
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
