import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './CartBlock.css';
import { BiCartAlt } from 'react-icons/bi';
import { CartMenu } from './../CartMenu/CartMenu'
import {ItemsInCart} from './../ItemsInCart/ItemsInCart'
import { calcTotalPrice } from '../utils';
import { useNavigate } from 'react-router-dom';

export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsIncart);
    const totalPrice = calcTotalPrice(items);
    const history = useNavigate();
    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false);
        history('/order');
    }, [history])
    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length}/>
            <BiCartAlt size={25} className='cart-block__icon' onClick={
                ()=> setIsCartMenuVisible(!isCartMenuVisible)}/>
            {
                totalPrice > 0
                    ? <span className='cart-block__total-price'>{calcTotalPrice(items)} uah</span>
                    : null
            }
            {
                isCartMenuVisible?<CartMenu items={items} onClick={handleClick}/> : null
            }

        </div>
    )
}