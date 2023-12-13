import { createContext, useState } from "react";

export const ShopContext = createContext(null)

//create provider for contextto useable for other pages
export const ShopContextProvider=(props)=>{

    //state for cart, to have list of shopping
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

    //share {items} between cart and shoplist
    const contextValue = {cartItems, addToCart, removeFromCart}

    //provider share states for other components to prevent from prop drilling

    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}