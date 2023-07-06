import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2023');

    const expenses = props.items;

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
            <ExpenseItem expense={expenses[0]}></ExpenseItem>
            <ExpenseItem expense={expenses[1]}></ExpenseItem>
            <ExpenseItem expense={expenses[2]}></ExpenseItem>
            <ExpenseItem expense={expenses[3]}></ExpenseItem>
        </Card>
    )
}

export default Expenses;