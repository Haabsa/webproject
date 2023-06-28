import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './Registor.css';
import Footer from '../component/Footer';
import NavBar from '../component/NavBar';
import Dashboard from '../component/Dashboard';
class Registor extends Component {
    render() {
        return (
//             <div><NavBar/> <Dashboard/>
//                 <div class="div container3">
   
//     <h2 class="h2 text-center">Register</h2>

        
        
//     <div>
//         <label for="">Enter your ID</label>
//         <input type="text"   required/><br/>
//         <label for="">Enter your Email</label>
//         <input type="text"   required/>
//         <label for="password">Enter your Password</label>
//         <input type="password"  id="password" />
//         <label for="password">Confirm your Password</label>
//         <input type="password"  id="password" />
//         <div>
//         <p>If you dont have an account?<a href='/sajili'><span>Register here</span></a></p>
//                 </div>
//         <p><link><button type='button' className="btn2 btn-info btn-info BACK "><i className='fa fa-back' ></i></button></link><br/>
//         <button type='button' className="btn2 btn-primary" color="primary">Submit</button></p>
//     </div>
  
//       </div>

//       <Footer/>
   
// </div> 

<div><NavBar/> <Dashboard/>
                <div class="div container">
             <form class="login-form">
   
    <h2>Registration Form</h2>

        
        
   <div class="form-group">
        <label for="">Enter your ID</label>
        <input type="text"   required/><br/>
</div>
<div class="form-group">
        <label for="">Enter your Email</label>
        <input type="text"   required/>
</div>
<div class="form-group">
        <label for="password">Enter your Password</label>
        <input type="password"  id="password" />
</div>
<div class="form-group">
        <label for="password">Confirm your Password</label>
        <input type="password"  id="password" />
        </div>
        <p><button type='button' className="btn2 btn-primary" color="primary">Submit</button>
        
        {/* <a href='/sajili'><span>Back to Login</span></a> */}
                
        <p><link to={"login"}><button type='button' className="btn2 btn-info btn-info BACK "><i className='fa fa-back' ><span>Back to Login</span></i></button></link><br/></p>
        {/* <Link to={"sajili"}><br/><span>Register here</span></Link> */}
        </p>
   
        </form>
    </div>
    
      

      <Footer/>
   
</div> 
            
        );
    }
}

export default Registor;