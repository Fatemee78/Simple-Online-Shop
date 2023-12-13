import { useState } from "react"

export const useCart=()=>{
    const [cartItems, setCartItems] = useState([]) 
      //add product to cart items
      const addToCart = (itemId)=>{
        // create a row per product if there isn`t any product
        if(!cartItems?.find((item)=> item.id === itemId))
        
        //to add products in cart as an obj that includes id, and count
        setCartItems([...cartItems, {id: itemId, count : 1}])
        else
        setCartItems(cartItems.map((item)=> {
            if(item.id === itemId)
            return{ ...item, count: item.count+1}
            else return item
        }))
        console.log(cartItems)
    }

    // remove from cart
    const removeFromCart = (itemId)=>{
        setCartItems(cartItems.map((i)=>{
            if(i.id === itemId)
            return{...i, count:i.count ===0 ? 0: i.count-1} 
            else return i
        }))
    }
 return{
    cartItems,addToCart, removeFromCart
 }
}