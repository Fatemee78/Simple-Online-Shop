import React, { useContext } from "react";
import { PRODUCTS } from "../data/Products";
import { ShopContext } from "../context/shopContext";
import Product from "../pages/shop/Product";

const Cart =()=>{
    //we need to use cart items in cart to access those products be selected

    const {cartItems} = useContext(ShopContext)
    return (
        <React.Fragment>
            <h3>Your Cart Items</h3>
            <div className="row">
                {/* {PRODUCTS.map((prod)=>{
                    if(cartItems.some((items)=> items.id === prod.id && items.count>0))
                    return <Product data={prod}></Product>
                })} */}
                {PRODUCTS.map((prod)=>{
                    return cartItems.some((items)=> items.id === prod.id && items.count>0)
                    ? <Product data={prod}></Product>
                    : null;
                })}
            </div>
        </React.Fragment>
    )
}

export default Cart;