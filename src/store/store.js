import { configureStore } from "@reduxjs/toolkit";
import notReducer from "../not/notSlice";

export default configureStore({
    reducer:{
        notlar:notReducer
    }
    
})