import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
    
    
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="w-6/12 mx-auto text-center m-3 p-3">
            <h1 className="text-3xl font-bold">Cart</h1>
            <button className="text-xl bg-black text-white rounded-xl p-2 m-4" onClick={handleClearCart}>Clear Cart</button>
           <ItemList items= {cartItems} />
        </div>
    )
}

export default Cart;