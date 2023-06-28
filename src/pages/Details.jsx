import React, { Component, useEffect, useState } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import { Link,Navigate, useNavigate } from 'react-router-dom'
import './Details.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TeacherService from '../service/TeacherService';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import Dashboard from '../component/Dashboard';
function Details(){
    const[Teachers , setTeachers] = useState([]);
    const Navigate = useNavigate();

    useEffect(()=>{
        loadTeachers();
    },[]);

    const loadTeachers = async () => {
        try {
            const  answer = await axios.get("http://localhost:8080/api/v1/teacher/getAll");
            setTeachers(answer.data);
        }catch(error){
            console.log(error);

        }
    };
const deletehandelSubmit =(teacherID)=>{
    const popMessage = window.confirm('Are you sure you Want to Delete?');
    if (popMessage){
        axios.delete(`http://localhost:8080/api/v1/teacher/${teacherID}`)
        .then((res)=>{
            Navigate("/futa");
            window.location.reload();
        })
        .catch((error)=> console.log(error));
    }
};

     
        return (
            <div><NavBar/><Dashboard/>
                
        <div className="container-lg">
        <div className="table-wrapper">
        
<h2 className="text-center">Subjects List</h2>
<div class="col-sm-8">
{/* <a type="button" class="btn6 btn-info add-new" onClick={this.add}><i className="fa fa-plus"></i> Add New</a><br/><br/> */}

<Link to={"/registorS"} type='button' className='btn6 btn-info add=new'><i className='fa fa-plus'> Add New</i></Link><br/><br/>

{/* <link to={"reg"} type="button" class="btn6 btn-info add-new" ><i className="fa fa-plus"></i> Add New</link> */}
</div>
<div className = "row">
<table className = "table table-striped table-bordered table-responsive-md">
{/* <table class="table table-striped table-responsive-md"> */}
<thead>


<tr>
                        <th>TeacherID</th>
                        <th>Email</th>
                        <th>Subject Name</th>
                        <th>subject-Code</th>
                        <th>Subject-Description</th>
                        <th>Link</th>
                        <th>Actions</th>


</tr>
</thead>



                    <tbody className='tablebody'>
                    {
                        Teachers.length >0 ? (
                            Teachers.map((teacher,index) => (
                            <tr key = {teacher.teacherID}>
                            <td>{index + 1}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.subjectcode}</td>
                            <td>{teacher.subjectname}</td>
                            <td>{teacher.subjectdescription}</td>
                            <td>{teacher.link}</td>
                            <td>
                            <Link to={`/update/${teacher.teacherID}`}  type='button' className='btn5 btn-info  btn-info EDIT'><i className='fa fa-pencil'></i></Link>
                            <button onClick={()=>deletehandelSubmit(teacher.teacherID)} type='button' className='btn5 btn-danger  btn-info DELETE'><i className='fa fa-trash'></i></button>
                            {/* <button  className='btn5 btn-success  btn-info VIEW'> <i className='fa fa-eye'></i></button> */}
                            </td>

                            </tr>
                            ))
                        ):(
                            <tr>
                                <td colSpan="4">no Subject</td>
                            </tr>
                        )
                    }
                    

       </tbody>
              </table>
                           </div>

                         </div>
                      </div><Footer/>

            </div>
        );
    }


export default Details;



// class Details extends Component {
    // constructor(props){
    //     super(props)

        // this.state={
        //     teacher: []

        // }
//         this.formData = this.formData.bind(this);
//     }
//    componentDidMount(){
//     TeacherService.getTeacher().then((res) =>{
//         this.setState({teacher:res.data});

//     });

    
    

//    }
//    formData(){
//     this.props.history.post('/formData');

//    }
//     render() {


{/* {
                        this.state.teacher.map(
                            teacher =>
                            <tr key = {teacher.teacherID}>
                            <td>{teacher.teacherID}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.subjectcode}</td>
                            <td>{teacher.subjectname}</td>
                            <td>{teacher.subjectdescription}</td>
                            <td>{teacher.link}</td>

                            </tr>
                        )
                    } */}
                            {/*  <tr>

                        <td>bi5n</td>
                        <td>ali@gmail.com</td>
                        <td>java</td>
                        <td>2122</td>
                        <td>jockjkn jkj ikoiowjnc</td>
                        <td>jockjkn jnkjekj</td>
             
                             <Link to={"update"}> <button type='button' className='btn5 btn-info  btn-info EDIT'><i className='fa fa-pencil'></i></button></Link>
                                <Link to={""}> <button type='button' className='btn5 btn-danger  btn-info DELETE'><i className='fa fa-trash'></i></button></Link>
                                <Link to={""}> <button type='button' className='btn5 btn-sucess  btn-info VIEW'> <i className='fa fa-eye'></i></button></Link>
                            </tr>
                           <tr>
                        <td>bi5n89</td>
                        <td>ali@gmail.com</td>
                        <td>java</td>
                        <td>2122</td>
                        <td>jockjkn  ikoiowjnc</td>
                        <td>jockjkn jnknkjekj</td>
                        
                        <Link to={"update"}> <button type='button' className='btn5 btn-info  btn-info EDIT'><i className='fa fa-pencil'></i></button></Link>
                                <Link to={""}> <button type='button' className='btn5 btn-danger  btn-info DELETE'><i className='fa fa-trash'></i></button></Link>
                                <Link to={""}> <button type='button' className='btn5 btn-sucess  btn-info VIEW'> <i className='fa fa-eye'></i></button></Link>
                            </tr>
                            <tr>
                        <td>bi5n89</td>
                        <td>ali@gmail.com</td>
                        <td>java</td>
                        <td>2122</td>
                        <td>jockjkn  ikoiowjnc</td>
                        <td>jockjkn jnknkjekj</td>
                        <Link to={"update"}> <button type='button' className='btn5 btn-info  btn-info EDIT'><i className='fa fa-pencil'></i></button></Link>
                                <Link to={"delete"}> <button type='button' className='btn5 btn-danger  btn-info DELETE'><i className='fa fa-trash'></i></button></Link>
                                <Link to={"view"}> <button type='button' className='btn5 btn-sucess  btn-info VIEW'> <i className='fa fa-eye'></i></button></Link>
                            </tr> */}
                            