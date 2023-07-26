const IdCard = props => {
    return (
        <div className="box IdCard">
            <img src={ props.picture } alt="" />
            <div>
                <strong>First Name</strong>: { props.firstName } <br />
                <strong>Last Name</strong>: { props.lastName } <br />
                <strong>Gender</strong>: { props.gender } <br />
                <strong>Height</strong>: { props.height } <br />
                <strong>Birth</strong>: { props.birth.toString() } <br />
            </div>
        </div>
    );
}
 
export default IdCard;