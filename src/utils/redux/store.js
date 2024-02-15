import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
        appConfig: appSlice,
        search: searchSlice,
    }
})