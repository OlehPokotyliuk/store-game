import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GameBuy.css';
import { Button } from '../Button/Button';
import { setItemInCart, deleteItemFromCart } from '../../redux/Cart/reducer';

export const GameBuy = ({game})=>{
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsIncart);
    const isItemInCart = items.some(item => item.id === game.id);
    
    const handleClick = (e)=>{
        e.stopPropagation();
        if(isItemInCart){
            dispatch(deleteItemFromCart(game.id))
        }else{
            dispatch(setItemInCart(game))
    }
    }

    return(
        <div className="game-buy">
            <span className='game-buy__price'>{game.price} грн</span>
            <Button
                type={isItemInCart? "secondary" : "primary"}
                onClick={handleClick}
            >
                {
                    isItemInCart? "Убрать из корзины" : "В Корзину"
                }
            </Button>
        </div>
    )
}