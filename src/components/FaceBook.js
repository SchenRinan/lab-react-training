import profiles from '../data/berlin.json';
import { useState } from 'react';

const FaceBook = () => {
    const [filter, setFilter] = useState('');

    const filterDb = item =>{
        const filterArray = profiles.filter(filtrate => filtrate.country === item || item === '')
        let result = [];
        for(let i=0; i<filterArray.length; i++){
            result.push(
                <div className='box IdCard' key = { filterArray[i].img }>
                    <img src={ filterArray[i].img } alt="" />
                    <div>
                        <strong>First Name</strong>: { filterArray[i].firstName } <br />
                        <strong>Last Name</strong>: { filterArray[i].lastName } <br />
                        <strong>Country</strong>: { filterArray[i].country } <br />
                        <strong>Type</strong>: { filterArray[i].isStudent ? 'Student' : 'Teacher' } <br />
                    </div>
                </div>
            )
        }
        return result;
    }
    const buttons = item =>{
        let result = [];
        const countries = item.map(mapate => mapate.country)
        let unique = [];
        countries.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        
        for(let i=0; i<unique.length; i++){
            result.push(<button onClick={()=>setFilter(unique[i])}>{unique[i]}</button>)
        }
        return result;
    }

    return ( 
        <div className="FaceBook">
            <button onClick={()=>setFilter('')}>All</button>
            {buttons(profiles)}
            {filterDb(filter)}
        </div>
    );
}
 
export default FaceBook;