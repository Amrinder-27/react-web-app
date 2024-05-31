import { useState, useEffect } from "react";
import {REGULAR_MENU, REGULAR_MENU_ID } from "../Utils/constant";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    }, []);
    const fetchMenu = async ()=>{
        const data = await fetch(REGULAR_MENU +resId+ REGULAR_MENU_ID);
        const restJson = await data.json();
        setResInfo(restJson);
        
}
return resInfo;
}
export default useRestaurantMenu;