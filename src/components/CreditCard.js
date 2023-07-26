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
        <div class="CreditCard" style={{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
            <div class="type">
                <img src= {typeCheck(props.type)} alt="" />
            </div>
            <div class="number">•••• •••• •••• {props.number.slice(props.number.length - 4, props.number.length)} </div>
            <div class="expires-bank"><span>Expires {props.expirationMonth}/{props.expirationYear} </span><span class="bank">{props.bank}</span>
            </div>
            <div class="owner">{props.owner}
            </div>
        </div>
    );
}
 
export default CreditCard;