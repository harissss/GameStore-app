import './LikeButton.css'
import { useState } from "react";

function LikeButton() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    }

    return (
        <>
          <div className='like-button' onClick={toggleLike}>
            {liked ? '♥' : '♡'}
          </div>
        </>
    );
}

export default LikeButton;