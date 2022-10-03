import { createSlice } from "@reduxjs/toolkit";
 export const notSlice=createSlice({
    name:"not",
    initialState:{
        notes:["React","Redux","Javascript"]
    },
    reducers:{
        notEkle:(state,action)=>{
            state.notes=state.notes.concat(action.payload);
        },
        notSil:(state,action)=>{
            state.notes.splice(action.payload,1);
        },
        notGuncelle:(state,action)=>{
            state.notes[action.payload[1]]=action.payload[0];
        }
    }
 })

 export const {notEkle,notSil,notGuncelle}=notSlice.actions;
 export const selectNot=state=>state.notlar.notes;
 export default notSlice.reducer;