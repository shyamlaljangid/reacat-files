import { configureStore } from "@reduxjs/toolkit";
import todolistSlice from "../fetures/todolist-redux/todolistSlice";
export default configureStore({
    reducer: {
        // count:Counter
        Todolist:todolistSlice
    }
})