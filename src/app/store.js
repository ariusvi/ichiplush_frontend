import storage from "redux-persist/lib/storage";
import userSlice from "./slices/userSlice";
import searchSlice from "./slices/searchSlice";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
    user: userSlice,
    search: searchSlice,
    });

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(thunk),
});