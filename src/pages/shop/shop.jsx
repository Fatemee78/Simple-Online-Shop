import React from "react";
import { PRODUCTS } from "../../data/Products";
import Product from "./Product";

const shop =()=>{
    return (
    <React.Fragment>
        <h3>Shop</h3>
        <div className="row">
            {PRODUCTS.map((productData)=>{
                return <Product key={productData.id} data= {productData}/>
            })}
        </div>
    </React.Fragment>
    
    )
}

export default shop;