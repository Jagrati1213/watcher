import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";
import chatSlice from "./slices/chatSlice";

export const store = configureStore({
    reducer: {
        appConfig: appSlice,
        search: searchSlice,
        chats: chatSlice,
    }
})