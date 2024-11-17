import { createSlice } from '@reduxjs/toolkit';



export const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload); // Add logic to add items
        },
        remove: (state, action) => {
            return state.filter(item => item.id !== action.payload); // Remove logic
        },
    },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
