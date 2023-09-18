import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BlogAction, getBlogAction } from '../action/BlogAction';

export default function Blog() {
  const dispatch=useDispatch()
  const {blogdata,addedblog}=useSelector(state=>state.allBlog)
  console.log(blogdata)

  const[data,setdata]=useState({
    username:"",
    email:""
  })
  const handelpostdata=()=>{
    dispatch(BlogAction(data))
  };
  useEffect(()=>{
    dispatch(getBlogAction())
  },[addedblog])
  return (<>
  
  <div class="container">
    <div class="row">
      <div class="col-sm-6 offset-sm-3">
        <div>
          <label for="name" class="form-label">username</label>
          <input value={data.username} onChange={e=>setdata({...data,username:e.target.value})}type="text" class="form-control" id="name" placeholder='enter your name'/>
         </div>
         <div>
          <label for="name" class="form-label">email</label>
          <input value={data.email} onChange={e=>setdata({...data,email:e.target.value})}type="email" class="form-control" id="name" placeholder='enter your email'/>
      </div>
      <button  onClick={handelpostdata}type="button" class="btn btn-primary mt-2">submit</button>
    </div>
  </div>
  </div>


  <div class="container mt-5">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <table class="table table-dark table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Number</th>
                  
                </tr>
              </thead>
              <tbody> 
                  {
                  blogdata?.map((item ,index) => <>
                  <tr>
                  <th scope="row">{index +1}</th>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  
                </tr>
                
                  </>)
                 }
              </tbody>
            </table>
          </div>
        </div>
      </div>

































  </>

  )}
  
  
  
  
    




