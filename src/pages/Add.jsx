import React, { Component } from 'react';
import './Add.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import TeacherService from '../service/TeacherService';
import {useState} from "react";
import axios from 'axios';
import NavBar from '../component/NavBar';
import Dashboard from '../component/Dashboard';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';
function Add(){
    const [inputEmail,setEmail] = useState(['']);
    const [inputSubjectcode,setSubjectcode]=useState(['']);
    const [inputSubjectname,setSubjectname]=useState(['']);
    const [inputSubjectdescription,setSubjectdescription]=useState(['']);
    const [inputLink,setLink]=useState(['']);
    const navigate = useNavigate();
    const handelSubmit =(event) =>{
        event.preventDefault();
        const requestdata ={
            email:inputEmail,
            subjectcode:inputSubjectcode,
            subjectname:inputSubjectname,
            subjectdescription:inputSubjectdescription,
            link:inputLink
        };

        axios.post("http://localhost:8080/api/v1/teacher/Add",requestdata).then(response =>{
            console.log(response.data);
          
            navigate("/detail");
        }).catch(error=>{
            console.error(error);
        })
    }


        return (
<div><NavBar/><Dashboard/>
<div className="login-form1">

{/* 
<div className="card col-md-12 offset-md-2 "> */}
<div className='usedFor'>

    <h3>
    <i className='fa fa-user'></i>Add subject</h3></div>

 <form onSubmit={handelSubmit}>

      
       
        <div class="form-group1">
            <label>Enter your Email</label>
            <input type="text" name="email" id="Email" class="form-control"
            value={inputEmail} onChange={event=>setEmail(event.target.value)}
            placeholder='Enter your Email'
                required
            />
        </div>
        <div class="form-group1">
            <label>Enter Subject-Code</label>
            <input type="text" name="Subjectcode" id="Subjectcode" class="form-control"
            value={inputSubjectcode} onChange={event => setSubjectcode(event.target.value)}
            placeholder='Enter your Subject Code'
                required
            />
        </div>
        <div class="form-group1">
            <label>Enter Subject-Name</label>
            <input type="text" name="Subjectname" id="Subjectname" class="form-control"
                value={inputSubjectname} onChange={event => setSubjectname(event.target.value)}
                placeholder='Enter your Subject Name'
                required
            />
        </div>
        <div class="form-group1">
            <label>Enter Subject-Description</label>
            <input type="text" name="Subjectdescription" id="Subjectdescription" class="form-control"
                value={inputSubjectdescription} onChange={event => setSubjectdescription(event.target.value)}
                placeholder='Enter your SubjectDescription'
                required
            />
        </div>
        <div class="form-group1">
            <label>Enter Link</label>
            <input type="text" name="link" id="link" class="form-control"
                value={inputLink} onChange={event => setLink(event.target.value)}
                placeholder='Enter your Link'
                required
            />
        </div>
        <div>
       <p> <button type="submit" class="btn btn-success"  color="primary"  >Save</button>
        <button type="submit" class="btn btn-danger" color="primary" >Cancel</button></p>
        </div>
        
        </form>
        
   </div>
   
   <Footer/>
   </div>
   
 
            
        );
    };



export default Add;













 {/* <div class="flex">
            <label for="">Enter your ID:</label>
            <input type="text" name="teacherID" id="teacherID" class="form-control"
            value={inputEmail} onChange={event=>setEmail(event.target.value)}
                placeholder='Enter your ID'
                required
            />
        </div> */}


// const Add = ()=> {
//     const [formData, setFromdata]= useState({
//         teacherID: "",
//         email:"",
//         Subjectcode:"",
//         Subjectname:"",
//         Subjectdescription:"",
//         link:"",


//     });
//     const handelChange =(event) =>{
//         setFromdata({...formData,[event.target.name]: event.target.value});
//     };
//     const handelSubmit = (event) => {
//         event.preventDefault();

//         axios
//         .post("http://localhost:8080/api/v1/teacher/Add",formData)
//         .then((response) => {
//             console.log(response.data);
//     });
// };
{/* <div class="flex">
            <label for="">Enter your ID:</label>
            <input type="text" name="teacherID" id="teacherID" class="form-control"
            value={inputEmail} onChange={event=>}
                placeholder='Enter your ID'
                required
            />
        </div>
        <div class="form-group">
            <label>Enter your Email</label>
            <input type="text" name="email" id="Email" class="form-control"
            value={formData.email} onChange={handelChange}
            placeholder='Enter your Email'
                required
            />
        </div>
        <div class="form-group">
            <label>Enter Subject-Code</label>
            <input type="text" name="Subjectcode" id="Subjectcode" class="form-control"
            value={formData.Subjectcode} onChange={handelChange}
            placeholder='Enter your Subject Code'
                required
            />
        </div>
        <div class="form-group">
            <label>Enter Subject-Name</label>
            <input type="text" name="Subjectname" id="Subjectname" class="form-control"
                value={formData.Subjectname} onChange={handelChange}
                placeholder='Enter your Subject Name'
                required
            />
        </div>
        <div class="form-group">
            <label>Enter Subject-Description</label>
            <input type="text" name="Subjectdescription" id="Subjectdescription" class="form-control"
                value={formData.Subjectdescription} onChange={handelChange}
                placeholder='Enter your SubjectDescription'
                required
            />
        </div>
        <div class="form-group">
            <label>Enter Link</label>
            <input type="text" name="link" id="link" class="form-control"
                value={formData.link} onChange={handelChange}
                placeholder='Enter your Link'
                required
            />
        </div>
        <div>
       <p> <button type="submit" class="btn btn-sucess"  color="primary"  >Save</button>
        <button type="submit" class="btn btn-danger" color="primary" >Cancel</button></p>
        </div>
        
        </form>
        
   </div>
   
   <Footer/>
   </div>
   
  */}
            