import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './currency.css';

const Currency = () => {
    const {dispatch} = useContext(AppContext);
    
    const setCurrency = (val) => {
        let label = document.getElementById("curLabel")
        let selectedIndex = val["selectedIndex"]
        let selectedObject = val[selectedIndex]
        label.innerText = `Currency (${selectedObject.text})`


        dispatch({
            type: 'CHG_CURRENCY',
            payload: val.value
        });
    }


    return (
                <div className="Currency">
                    <select id="curSelect" className="curSelect" onChange={(event) => setCurrency(event.target)}>
                        <option defaultValue value="$" name="$ Dollar">$ Dollar</option>
                        <option value="£" name="£ Pound">£ Pound</option>
                        <option value="€" name="€ Euro">€ Euro</option>
                        <option value="₹" name="₹ Rupee">₹ Rupee</option>
                    </select>
                    <label htmlFor="curSelect" id="curLabel">Currency</label>
                </div>
    );
};

export default Currency;