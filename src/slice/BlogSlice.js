import { createSlice } from "@reduxjs/toolkit";
import { BlogAction, getBlogAction } from "../action/BlogAction";
export  const BlogSlice=createSlice({
    name: "BlogData",
   initialState : {blog : []} ,
   reducer :{},
   extraReducers :(builder)=>{
    builder
    .addCase(BlogAction.pending,(state,{payload})=>{
        state.loading=true
    })
.addCase(BlogAction.fulfilled,(state,{payload})=>{
    state.loading=true
    state.addedblog=payload
})
// *****************************************
.addCase(BlogAction.rejected,(state,{payload})=>{
    state.loading=true
    state.bloError=payload
})


.addCase(getBlogAction.pending,(state,{payload})=>{
state.loading=true
})
.addCase(getBlogAction.fulfilled,(state,{payload})=>{
    state.loading=true
    state.blogdata=payload
})
.addCase(getBlogAction.rejected,(state,{payload})=>{
    state.loading=true
    state.bloError=payload
})








   }
     
})