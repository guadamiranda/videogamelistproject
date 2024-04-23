import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import "./gameListCard.css";

const GameListCard = () => {
  return (
    <div className="d-flex flex-row justify-content-between gameCardListContainer">
      <div className="containerData d-flex flex-row">
        <div className="gameCardListImage"></div>
        <div className="d-flex flex-column titleDate">
          <span className='titleGameCard'>Titulo del juego fsdf s dfsdf fsdfs sdfsdfsdf sdfsdf sdfsdf dfdfdf sfsdfsdf </span>
          <span className='subtitleGameCard'>Agregado el día: </span>
        </div>
      </div>
      <div className="iconContainer d-flex justify-content-center align-items-center flex-column">
        <SentimentVerySatisfiedIcon className='iconGameCard'/>
        <div className="clasificacionGameCard">10/10</div>
      </div>
      
    </div>
  );
};

export default GameListCard;
