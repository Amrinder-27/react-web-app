import { IMAGELINK } from "../Utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  //   const {name, cuisines} = resData;
  const imagelink = IMAGELINK + resData.info.cloudinaryImageId;
  return (
    <div className="res-cards p-4 m-4 w-[257px] min-h-96 bg-gray-100 rounded-lgs">
      <div className="image-logo w-full h-52 relative border-b-emerald-100 overflow-hidden">
        {" "}
        <img
          className=" w-full h-full logo rounded-lg object-cover"
          src={imagelink}
        />
      </div>

      <h1 className="bold py-2 text-lg font-bold">{resData.info.name}</h1>
      <h3>{resData.info.areaName}</h3>
      <h4>{resData.info.avgRating}</h4>
    </div>
  );
};

/** High ORDER function which enhances the component with label,  havnt customize the existing one we just added label on top of it. */
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
