import './App.css'
import Shop from './Shop';
import { useState } from 'react';
import TypeButtons from './TypeButtons';
import { data } from './data';


function Candels() {
    const [candels, setCandels] = useState(data);
    
    const chosenTypeOfCandel = (type) => {
        const newCandel = data.filter (element => element.type === type);
        setCandels (newCandel);
    }


    return (
        <div>
            <div>
            <TypeButtons chosenTypeOfCandel={chosenTypeOfCandel}/>
            </div>
            <div>
            <Shop candels={candels}/>
            </div>
        </div>
    )
}

export default Candels;