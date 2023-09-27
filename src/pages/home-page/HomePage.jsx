import React from 'react';
import { GAMES } from '../../data';
import { GameItem } from '../../components/GameItem/GameItem';
import './HomePage.css';


export const HomePage = () =>{
    return(
        <div className="homePage">
        {
            GAMES.map(game=><GameItem game={game} key={game.id}/>)
        }

        </div>
    )
}