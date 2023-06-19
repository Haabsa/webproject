import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Update extends Component {
    render() {
        return (
            <div>
                <div class="div container mt-5 h-50 w50">
    <h1><b>Update Subject</b></h1> 
    <form action="" class="card">
        <div class="card-hearder">
        
        </div>
    <div class="card-body">
        <label for="">Enter your ID</label><br/>
        <input type="text"  placeholder="ID" required/><br/>
        <label for="">Enter your Email</label><br/>
        <input type="text"  placeholder="Email" required/><br/>
        <label for="">Enter Subject Code </label><br/>
        <input type="text" placeholder="Subject code" required/><br/>
        <label for="">Enter Subject Name</label><br/>
        <input type="text"  placeholder="Subject Name" required/><br/>
        <label for="">Enter Subject Description</label><br/>
        <input type="text" placeholder="Subject Description" required/><br/>
         

        <a><button class="btn btn-primary" color="primary">Save</button></a>
        <a><button class="btn btn-success mx-2" color="primary">Cancel</button></a>
    </div>
    
    </form>

    </div>
            </div>
        );
    }
}

export default Update;