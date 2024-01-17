import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import persistedReducer from "./rootReducer";

const appStore = configureStore({
  reducer: persistedReducer,
  // Add other configuration options if needed
});

export const persistor = persistStore(appStore);

export default appStore;
