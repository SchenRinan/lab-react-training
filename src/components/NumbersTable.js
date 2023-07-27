const NumbersTable = props => {
    const ascendTable = item =>{
        let result = [];
        for(let i=1;i<=item;i++){
            if(i % 2 === 1){
                result.push(<li key={i} style={{backgroundColor: 'white'}}>{i}</li>);
            }
            if(i % 2 === 0){
                result.push(<li key={i} style={{backgroundColor: 'red'}}>{i}</li>);
            }
        }
        return result;
    }

    
    return (  
        <ul className="NumbersTable">
            { ascendTable(props.limit) }
        </ul>
    );
}
 
export default NumbersTable;