import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cart/reducer'
import gamesReducer from './Games/reducer'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        game: gamesReducer,
    },
    
})