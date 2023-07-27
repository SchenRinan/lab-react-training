import profiles from '../data/berlin.json';
import { useState } from 'react';

const FaceBook = () => {
    const [filter, setFilter] = useState('');

    const extractDb = item =>{
        let result = [];
        for(let i=0; i<item.length; i++){
            result.push(
                <div className='box IdCard' key = { item[i].img }>
                    <img src={ item[i].img } alt="" />
                    <div>
                        <strong>First Name</strong>: { item[i].firstName } <br />
                        <strong>Last Name</strong>: { item[i].lastName } <br />
                        <strong>Country</strong>: { item[i].country } <br />
                        <strong>Type</strong>: { item[i].isStudent ? 'Student' : 'Teacher' } <br />
                    </div>
                </div>
            )
        }
        return result;
    }

    const filterDb = item =>{
        const filterArray = profiles.filter(filtrate => filtrate.country === item)
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

    return ( 
        <div className="FaceBook">
            <button onClick={()=>setFilter('')}>All</button>
            <button onClick={()=>setFilter('Germany')}>Germany</button>
            <button onClick={()=>setFilter('Malaysia')}>Malaysia</button>
            <button onClick={()=>setFilter('England')}>England</button>
            <button onClick={()=>setFilter('USA')}>USA</button>
            <button onClick={()=>setFilter('Sweden')}>Sweden</button>
            <button onClick={()=>setFilter('Nigeria')}>Nigeria</button>
            <button onClick={()=>setFilter('Italy')}>Italy</button>
            <button onClick={()=>setFilter('Scotland')}>Scotland</button>
            <button onClick={()=>setFilter('Kazakhstan')}>Kazakhstan</button>
            <button onClick={()=>setFilter('Russia')}>Russia</button>
            <button onClick={()=>setFilter('Catalonia')}>Catalonia</button>
            <button onClick={()=>setFilter('Israel')}>Israel</button>
            <button onClick={()=>setFilter('Brazil')}>Brazil</button>
            <button onClick={()=>setFilter('Taiwan')}>Taiwan</button>
            <button onClick={()=>setFilter('Turkey')}>Turkey</button>
            <button onClick={()=>setFilter('Norway')}>Norway</button>
            { filter ? filterDb(filter) : extractDb(profiles) }        
        </div>
    );
}
 
export default FaceBook;