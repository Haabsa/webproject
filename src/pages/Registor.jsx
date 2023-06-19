import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Registor extends Component {
    render() {
        return (
            <div>
                <div class="div container mt-5 h-50 w50">
    <h1><b>Register</b></h1> 
    <form action="" class="card">
        <div class="card-hearder">
        
        </div>
    <div class="card-body">
        <label for="">Enter your ID</label><br/>
        <input type="text"   required/><br/>
        <label for="">Enter your Email</label><br/>
        <input type="text"   required/><br/>
        <label for="password">Enter your Password</label>
        <input type="password"  id="password" /><br/>
        <label for="password">Confirm your Password</label>
        <input type="password"  id="password" /><br/>
        <button class="btn btn-primary" color="primary">Back to Login</button><br/>

        <a><button class="btn btn-primary" color="primary">Submit</button></a>
  
      </div>
   </form>
</div> 
            </div>
        );
    }
}

export default Registor;