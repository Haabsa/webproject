import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Update.css'
import 'axios'
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import Dashboard from '../component/Dashboard';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function Update(){
    const navigate = useNavigate();
    const {teacherID} = useParams();

    const[data,setData] = useState({});
    useEffect(()=>{
        const fetchdataById = async()=>{
            try{
                const response = await axios.get(`http://localhost:8080/api/v1/teacher/getby/${teacherID}`);
                setData(response.data);
            }catch(error){
                console.log(error)
            }
        };

        fetchdataById();
    },[teacherID]);

    function handelSubmit(event){
        event.preventDefault();
        axios.put(`http://localhost:8080/api/v1/teacher/update/${teacherID}`,data);
        navigate("/edit");
    }

    return (
<form onSubmit={handelSubmit}>
        <div><NavBar/><Dashboard/>
           
        <div class="container1">
        
        <h3 className="text-center">Update Subject</h3>

        {/* <label for="">Enter your ID</label>
        <input type="text"   placeholder="ID"  className='form-control'/> */}
        <label for="">Enter your Email</label>
        <input type="text" value={data.email} onChange={event=>setData({...data,email:event.target.value})} placeholder="Email" required className='form-control'/>
        <label for="">Enter Subject Code </label>
        <input type="text" value={data.subjectcode} onChange={event=>setData({...data,subjectcode:event.target.value})} placeholder="Subject code" required  className='form-control'/>
        <label for="">Enter Subject Name</label>
        <input type="text" value={data.subjectname} onChange={event=>setData({...data,subjectname:event.target.value})}  placeholder="Subject Name" required  className='form-control'/>
        <label for="">Enter Subject Description</label>
        <input type="text" value={data.subjectdescription} onChange={event=>setData({...data,subjectdescription:event.target.value})} placeholder="Subject Description" required  className='form-control'/>
        <label for="">Enter Subject Link</label>
        <input type="text" value={data.link} onChange={event=>setData({...data,link:event.target.value})} placeholder="Subject Description" required  className='form-control'/>
        <br/>
        <Link to={"/edit"} type="button" class="btn1 btn-success mx-2" color="primary">Cancel</Link>
        <button type="submit" class="btn1 btn-primary" color="primary">Save</button>
       
    </div><Footer/>
    </div>
    </form>
    
    );


}
export default Update;


















// class Update extends Component {
    // render() {
        // return (
            {/* <div><NavBar/><Dashboard/>
           
                <div class="container1">
                
                <h3 className="text-center">Update Subject</h3> */}

  
     
    {/* <div class="card-body"> */}
        {/* <label for="">Enter your ID</label>
        <input type="text"  placeholder="ID" required className='form-control'/>
        <label for="">Enter your Email</label>
        <input type="text"  placeholder="Email" required className='form-control'/>
        <label for="">Enter Subject Code </label>
        <input type="text" placeholder="Subject code" required  className='form-control'/>
        <label for="">Enter Subject Name</label>
        <input type="text"  placeholder="Subject Name" required  className='form-control'/>
        <label for="">Enter Subject Description</label>
        <input type="text" placeholder="Subject Description" required  className='form-control'/>
        <a><button class="btn1 btn-primary" color="primary">Save</button></a>
        <a><button class="btn1 btn-success mx-2" color="primary">Cancel</button></a>
    </div><Footer/>
    
      */}

    // </div>
    
            
        // );
//     }
// }

// export default Update;