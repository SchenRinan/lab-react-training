const DriverCard = (props) => {
    return ( 
        <div className="DriverCard">
            <img src={ props.img } alt="" />
            <div>
                <h2>{ props.name }</h2>
                <div className="Rating">{ '★'.repeat(Math.round(props.rating))}{'☆'.repeat(5 - Math.round(props.rating)) }</div>
                <p>{ props.car.model } - { props.car.licensePlate }</p>
            </div>
        </div>
    );
}
 
export default DriverCard;