import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
    const expenses = props.items;

    return (
        <Card className="expenses">
            <ExpenseItem expense={expenses[0]}></ExpenseItem>
            <ExpenseItem expense={expenses[1]}></ExpenseItem>
            <ExpenseItem expense={expenses[2]}></ExpenseItem>
            <ExpenseItem expense={expenses[3]}></ExpenseItem>
        </Card>
    )
}

export default Expenses;