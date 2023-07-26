const BoxColor = (props) => {
    //by chatGPT
    function rgbToHex(red, green, blue) {
        // Ensure the input values are within the valid range (0-255)
        red = Math.max(0, Math.min(255, red));
        green = Math.max(0, Math.min(255, green));
        blue = Math.max(0, Math.min(255, blue));
      
        // Convert each color component to its hexadecimal representation
        const redHex = red.toString(16).padStart(2, '0');
        const greenHex = green.toString(16).padStart(2, '0');
        const blueHex = blue.toString(16).padStart(2, '0');
      
        // Concatenate the three hexadecimal values and return the result
        return `#${redHex}${greenHex}${blueHex}`;
    }

    return ( 
        <div className="box box-color" style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
            rgb({props.r},{props.g},{props.b})
            <br />
            { rgbToHex(props.r,props.g,props.b) }
        </div>
    );
}
 
export default BoxColor;