import { useState } from "react";

const LikeButton = () => {
    const [likes, setLikes] = useState(0)
    const [color, setColor] = useState('')
    const colorArray = ['purple','blue','green','yellow','orange','red'];
    const addLikes = () => {
        setLikes(likes + 1);
        setColor(colorArray[likes % colorArray.length]) 
    }
    return ( 
        <button className='LikeButton' onClick={addLikes} style={{backgroundColor: color}}>{likes} Like{ likes === 1 ? '' : 's' }</button>
    );
}
 
export default LikeButton;