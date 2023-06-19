import React, { Component } from 'react';
import './Add.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Add extends Component {
    render() {
        return (
            <div>
                <div className="container">


<div className="card col-md-6 offset-md-3 offset-md-3">

    <h2 class="h2 text-center">Add subject</h2>
    <div class="card"></div>
    <div className="card-body">
    <form>
    <div className="form-group"></div>

        <div class="form-group">
            <label>Enter your ID</label>
            <input type="text" name="email" id="teacherID" class="form-control"/>
        </div>
        <div class="form-group">
            <label>Enter your Email</label>
            <input type="text" name="email" id="Email" class="form-control"/>
        </div>
        <div class="form-group">
            <label>Enter Subject-Code</label>
            <input type="text" name="Subcode" id="Subjectcode" class="form-control"/>
        </div>
        <div class="form-group">
            <label>Enter Subject-Name</label>
            <input type="text" name="subName" id="Subjectname" class="form-control"/>
        </div>
        <div class="form-group">
            <label>Enter Subject-Description</label>
            <input type="text" name="subDes" id="Subjectdescription" class="form-control"/>
        </div>
        <div class="form-group">
            <label>Enter Link</label>
            <input type="text" name="email" id="teacherID" class="form-control"/>
        </div><br/>
         

        <button class="btn btn-primary" color="primary">Save</button>
        <button className="btn btn-danger" color="primary">Cancel</button>
        
      
   </form>
   </div>
   </div>
   </div>
 
            </div>
        );
    }
}

export default Add;