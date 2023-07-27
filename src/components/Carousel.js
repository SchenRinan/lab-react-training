import { useState } from "react";

const Carousel = props => {
    const [image, setImage] = useState(props.images[0]);
    const [order, setOrder] = useState(0);

    const currentImage = item =>{
        if(item === 'left'){
            if(order > 0){setOrder(order-1);}
            if(order <= 0){
                setOrder(props.images.length -1)
            }
            console.log(order)
            setImage(props.images[order -1 ]);
        }
        if(item === 'right'){
            if(order > 0){setOrder(order+1);}
            if(order <= 0){
                setOrder(props.images.length -1)
            }
            console.log(order)
            setImage(props.images[order ]);
        }
    }
    return (  
        <div>
            <button onClick={()=>currentImage('left')}>Left</button>
            <img src={image} alt="" />
            <button onClick={()=>currentImage('right')}>Right</button>
        </div>
    );
}
 
export default Carousel;