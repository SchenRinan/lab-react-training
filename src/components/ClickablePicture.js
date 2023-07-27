import { useState } from "react";

const ClickablePicture = (props) => {
    const [click, setClick] = useState(false);
    const sunGlasses = () =>{
        setClick(click ? false : true);
    }

    return ( 
        <img className="ClickablePicture" src={ click ? props.imgClicked : props.img } alt="" onClick={sunGlasses}/>
    );
}
 
export default ClickablePicture;