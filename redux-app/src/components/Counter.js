import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {DECREMENT, INCREASE, INCREMENT, TOGGLE} from "../store";
import {counterActions} from "../store/counter";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const showCounter = useSelector((state) => state.counter.showCounter);

    const incrementHandler = () => {
        //dispatch({type: INCREMENT});
        dispatch(counterActions.increment());
    };

    const increaseHandler = () => {
        //dispatch({type: INCREASE, amount: 5});
        dispatch(counterActions.increase(5));
    };

    const decrementHandler = () => {
        ///dispatch({type: DECREMENT});
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        //dispatch({type: TOGGLE});
        dispatch(counterActions.toggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
