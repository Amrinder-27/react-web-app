import { useState, useContext } from "react";
import {Link} from 'react-router-dom'
import useOnlineStatus from '../Utils/useOnlineStatus';
import UserOnlineContext from "../Utils/UserOnlineContext";
import { useSelector, useStore } from "react-redux";

const Header = () => {
    const[btnName, setBtnName]  = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {userLogged} = useContext(UserOnlineContext);
    const cartItems = useSelector((store) => store.cart.items);
    
    return (
        <div className='flex px-20 mx-auto  justify-between bg-green-100'>
            <div>
                <img className='w-40' src='https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png'/>
            </div>
            <div className='flex items-center'>
                <ul className="flex">
                    <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li  className="px-4"><Link to="/">Home</Link></li>
                    <li  className="px-4"><Link to="/about">About us</Link></li>
                    <li  className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li  className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    
                    <li  className="px-4"><button className="login" onClick={() =>{
                      btnName=== 'Login'?  setBtnName("Logout"): setBtnName("Login")
                    }}>{btnName}</button></li>
                     <li className="px-4 font-bold">{userLogged}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;