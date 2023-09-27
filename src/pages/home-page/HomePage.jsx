import React, { useEffect, useState } from 'react';
import { GameItem } from '../../components/GameItem/GameItem';
import './HomePage.css';
import { useSelector } from 'react-redux';


export const HomePage = () =>{
  const games = useSelector(state=> state.gamesList.games);
  
  console.log(games);
    return(
        <div className="homePage">
        {
            games.map(game=>(
              <GameItem game={game} key={game.id}/>
            ))
        }

        </div>
    )
}