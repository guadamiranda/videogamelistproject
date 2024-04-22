import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import './gameMainDetails.css'
import Tag from '../Tag/Tag'
import ButtonAddGame from '../ButtonAddGame/ButtonAddGame';
import { useState } from 'react';
import ModalAddGameToList from '../ModalAddGameToList/ModalAddGameToList';

const GameMainDetails = (game: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const gameDetails = game.game
    return(
        <div className='gameDetailContainer'>
            <div className='row d-flex justify-content-start'>
                <div className='col-md-3 col-sm-12'>
                    <div className="gameDetailMainImageContainer">
                        <img src={gameDetails.image} className="gameDetailMainImage" />   
                    </div>
                    <ButtonAddGame onClickFunction={setIsOpen} />
                </div>
                <div className='col-md-9 col-sm-12'>
                    <div>
                        <span><b>Fecha de Salida:</b> {gameDetails.released}</span>
                        <hr />
                        <span><b>Genero:</b>{gameDetails.generes.map((genere:any) => ' ' + genere.name + ' - ')} </span>
                        <hr />
                        <span><b>Tiempo de juego:</b> {gameDetails.playtime} hs.</span>
                        <hr />
                        <span><b>Plataformas:</b></span>
                        <div>
                        {gameDetails.platforms.map((platform:any) => 
                            <div className='d-flex gap-2 align-items-center'>
                                <VideogameAssetIcon className='platformIcon'/> 
                                {platform.name}
                            </div>)
                        }
                        </div>
                        <hr />
                        <span><b>Metacritic:</b> {gameDetails.metacritic}/100</span>
                        <hr />
                        <span><b>Rating:</b> {gameDetails.rating}/5</span>
                        <hr />
                        <span><b>Tags:</b></span>
                        <div className='d-flex flex-row flex-wrap'>
                            {gameDetails.tags.map((tag:any) => <Tag tag={tag}/>)}
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            {isOpen && <ModalAddGameToList setCloseModal={setIsOpen}/>}
        </div>
    )
}

export default GameMainDetails