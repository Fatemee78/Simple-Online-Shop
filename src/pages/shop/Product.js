import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

 const Product = (props)=>{

    const {id, productImage, productNAme, price} = props.data

    //add data from shop context
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)
    

    //if there is not any product in cart don`t show the (-) button onther product
    const isInCart = cartItems.some((item)=>item.id === id) 

    return(
        <div className="col-3">
            <img className="w-100" src={productImage} alt="products-img"/>
            {productNAme}
            <p> Price : {price}$</p>
            <button className="btn btn-success btn-sm" onClick={()=> addToCart(id)}>+</button>
            <span className="mx-1">
                {/* show quantity of products */}
                {cartItems?.filter((row)=> row.id===id)[0]?.count}
            </span>
            {isInCart && <button className="btn btn-success btn-sm" 
            onClick={()=>removeFromCart(id)}>-</button>  
            }

        </div>
    )
}
export default Product;