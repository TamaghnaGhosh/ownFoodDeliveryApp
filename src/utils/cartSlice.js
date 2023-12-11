import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state over here
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // console.log(current(state));
            const itemId = action.payload;
            state.items = state?.items?.filter((card) => card?.card?.info?.id !== itemId)
            // return items?.filter((proDuctItem) => proDuctItem.card?.info?.id !== action?.payload?.card?.info?.id)
        },
        clearCart: (state, action) => {
            // state.items.length = 0; // []
            return { items: [] }
        }
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;