import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { addListener } from "@reduxjs/toolkit";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Dish = ({dish}) =>{
  const [quantity,setQuantity] = useState(1);
  const dispatch = useDispatch()
    return(<div >
         <img src={`./${dish.img}.jpg`}/>
       <h2>{dish.name}</h2>
       <h2> ${dish.price}</h2>
       {/*TO FIX LATER*/}
       <ChangeQuantity quantity = {quantity} setQuantity={setQuantity}/>
       <button onClick = {() => {dispatch(addItemToCart({dish,quantity}))}}>Add to cart</button>

    </div>)

    
}
export default Dish;