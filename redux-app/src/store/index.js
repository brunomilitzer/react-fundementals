import {configureStore} from '@reduxjs/toolkit';
import counterReducer from "./counter";
import authReducer from "./auth";

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const INCREASE = 'increase';
export const TOGGLE = 'toggle';

/*const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1,
                showCounter: state.showCounter
            };
        case INCREASE:
            return {
                counter: state.counter + action.amount,
                showCounter: state.showCounter
            };
        case DECREMENT:
            return {
                counter: state.counter - 1,
                showCounter: state.showCounter
            }
        case TOGGLE:
            return {
                counter: state.counter,
                showCounter: !state.showCounter
            }
        default:
            return state;
    }
}*/

//const store = createStore(counterReducer);

/*const store = configureStore({
    reducer: counterSlice.reducer
});*/

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;