// import master from 'master-card.svg';

const CreditCard = (props) => {
    const typeCheck = item => {
        if(item === 'Visa'){
            return '/visa.png'
        }
        if(item === 'Master Card'){
            return '/master-card.svg'
        }
    }
    return ( 
        <div className="CreditCard" style={{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
            <div className="type">
                <img src= {typeCheck(props.type)} alt="" />
            </div>
            <div className="number">•••• •••• •••• {props.number.slice(props.number.length - 4, props.number.length)} </div>
            <div className="expires-bank"><span>Expires {props.expirationMonth}/{props.expirationYear} </span><span className="bank">{props.bank}</span>
            </div>
            <div className="owner">{props.owner}
            </div>
        </div>
    );
}
 
export default CreditCard;