import { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [ enteredTitle, setEnteredTitle ] = useState( '' );
    const [ enteredAmount, setEnteredAmount ] = useState( '' );
    const [ enteredDate, setEnteredDate ] = useState( '' );

    const inputChangeHandler = ( identifier, value ) => {
        if ( identifier === 'title' ) {
            setEnteredTitle( value );
        } else if ( identifier === 'amount' ) {
            setEnteredAmount( value );
        } else {
            setEnteredDate( value );
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        clearInputData();
    };

    const clearInputData = () => {
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={ submitHandler }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                           value={enteredTitle}
                           onChange={ ( event ) => inputChangeHandler( 'title', event.target.value ) }/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"
                           value={enteredAmount}
                           min="0.01" step="0.01"
                           onChange={ ( event ) => inputChangeHandler( 'amount', event.target.value ) }/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"
                           value={enteredDate}
                           max="2023-12-31"
                           onChange={ ( event ) => inputChangeHandler( 'date', event.target.value ) }/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;