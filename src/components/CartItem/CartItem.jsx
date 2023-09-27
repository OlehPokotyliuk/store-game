import React from "react";
import './CartItem.css'

export const CartItem =({
    title,
    price,
    id,
})=>{
    return(
        <div className="cart-item">
            <span>{title}</span>
            <div className="cart-item__price">
                <span>{price} uah.</span>
            </div>
            <div className="cart-item__id">
                <span>{id}</span>
            </div>
        </div>
    )
    
}