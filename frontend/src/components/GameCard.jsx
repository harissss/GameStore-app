import './GameCard.css'
import './LikeButton'
import LikeButton from './LikeButton';

function GameCard({ GameObj }) {
  const { title, image, tags, description, price } = GameObj;

  return (
    <div className="game-card">
      <img src={image} alt={title} className="game-card-img"/>

      <div className='game-card-content'>
        <h2 className="game-card-title">{title}</h2>
        <p className="game-card-desc">{description}</p>
        <div className='game-card-tag-container'> {tags.map(tag => <div className='game-card-tag'> {tag} </div>)} </div>
        <div className='game-card-price-like-container'> 
          <p className="game-card-price">{price + "$"}</p>
          <LikeButton />
        </div>
      </div>
    </div>
  );
}

export default GameCard;

/*
let num = 0;
    let text = ["Hello", "bruh", "uuh"];

    function handleClick() {
        num = num + 1;
        let newText = text[num % (text.length)] 
        console.log(newText)
        document.getElementById("bruh").innerHTML = newText;
    }
*/