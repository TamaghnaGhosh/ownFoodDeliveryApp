// rootReducer.js

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // You can choose different storage options
import cartReducer from "./cartSlice";

const persistConfig = {
  key: 'root',
  storage,
  // Other options can be added here, like whitelist, blacklist, etc.
};

const rootReducer = combineReducers({
    cart: cartReducer,
  // Add other reducers here if you have more slices
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;



