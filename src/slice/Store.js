import { configureStore } from "@reduxjs/toolkit";
import { BlogSlice } from "./BlogSlice";
const store =configureStore({
    reducer:{
        allBlog: BlogSlice.reducer
    },
});
export default store;