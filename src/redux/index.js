import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cart/reducer'
import gamesReducer from './Games/reducer'
import gamesListReducer from "./gamesReducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        game: gamesReducer,
        gamesList: gamesListReducer,
    },
    
})