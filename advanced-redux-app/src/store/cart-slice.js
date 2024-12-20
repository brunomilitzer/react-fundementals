import {createSlice} from "@reduxjs/toolkit";

const initialState = {items: [], totalQuantity: 0, changed: false};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart: (state, action) => {
            console.log('Add Item from Cart');
            const newItem = action.payload;
            const existingItem = state.items.find(item => newItem.id === item.id);
            state.totalQuantity++;
            state.changed = true;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart: (state, action) => {
            console.log('Removing Item from Cart');
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            state.changed = true;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }

});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;