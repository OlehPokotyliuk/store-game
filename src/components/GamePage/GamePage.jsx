import React from 'react';
import './GamePage.css';
import { useSelector } from 'react-redux';
import { GameCover } from '../GameCover/GameCover';
import { GameGenre } from '../GameGenre/GameGenre';
import { GameBuy } from '../GameBuy/GameBuy';

export const GamePage = () => {
    const game = useSelector(state => state.game.currentGame)
    if (!game) return null
    return (
        <div className="game-page">
            <h1 className="game-page__title">{game.title}</h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe
                        width="90%"
                        height="400px"
                        src={game.video}                        
                        title="Youtube Video Player"
                        frameBorder={0}
                    >
                    </iframe>
                </div>
                <div className="game-page__right">
                    <GameCover image={game.image} />
                    <p>{game.description}</p>
                    <p className="secondary-text">Популярные метки етого продукта :</p>
                    {game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}
                    <div className="game-page__buy-game">
                        <GameBuy game={game} />
                    </div>
                </div>
            </div>
        </div>
    )
} 