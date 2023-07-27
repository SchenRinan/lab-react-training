import { useState } from "react";

const Carousel = props => {
    const [order, setOrder] = useState(0);
    
    const currentImage = item =>{
        if(item === 1){
            setOrder(order + 1)
            if(order === (props.images.length -1)){
                setOrder(0)
            }
        }
        if(item === -1){
            setOrder(order - 1)
            if(order === 0){
                setOrder(props.images.length - 1)
            }
        }
    }
    
    return (  
        <div>
            <button onClick={()=>currentImage(-1)}>Left</button>
            <img src={props.images[order]} alt="" />
            <button onClick={()=>currentImage(1)}>Right</button>
        </div>
    );
}
 
export default Carousel;