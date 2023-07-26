const Random = (props) => {
    return ( 
        <div className="box">
            Random value between 1 and 6 => { Math.floor(Math.random() * (props.max - props.min)) + props.min }
        </div>
    );
}
 
export default Random;