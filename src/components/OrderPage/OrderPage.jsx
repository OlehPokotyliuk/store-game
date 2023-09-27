import React from 'react';
import './OrderPage.css'
import { OrderItem } from '../OrderItem/OrderItem';
import { useSelector } from 'react-redux';
import { calcTotalPrice } from '../utils';


export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsIncart)
    if(items.length<1){
        return(<h1>Корзина пуста</h1>)
    }
    return (
        <div className="order-page">
            <div className="order-page__left">
                {items.map(game=> <OrderItem game={game}/>)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>
                        {items.length} товаров на сумму {calcTotalPrice(items)} uah.
                    </span>
                </div>
            </div>
        </div>
    )
}