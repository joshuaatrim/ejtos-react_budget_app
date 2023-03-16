import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {dispatch, budget, currency} = useContext(AppContext);
    
    const setBudget = (val) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    step='10'
                    style={{ marginLeft: '1px' , size: 10, width: 150}}
                    onChange={(event) => setBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;