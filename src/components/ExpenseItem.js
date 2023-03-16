import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import plusImg from '../Plus-Green-48.png'
import minusImg from '../Minus-Red-48.png'

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><input type="image" src={plusImg} alt="+" onClick={event=> increaseAllocation(props.name)}></input></td>
        <td><input type="image" src={minusImg} alt="-" onClick={event=> decreaseAllocation(props.name)}></input></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;

/*
<td><button onClick={event=> increaseAllocation(props.name)}><img src={plusImg}></img></button></td>
<td><button onClick={event=> decreaseAllocation(props.name)}>-</button></td>
*/