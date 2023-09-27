import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        itemsIncart: []
    },
    reducers:{
        setItemInCart: (state, action) => {
            state.itemsIncart.push(action.payload)
        },
        deleteItemFromCart: (state, action) =>{
            state.itemsIncart = state.itemsIncart.filter(game=> game.id !== action.payload)
        }
    }
});

export const {setItemInCart, deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;