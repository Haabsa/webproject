import React, { Component } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
class Login extends Component {
    render() {
        return (
        //     <div><NavBar/>
        //         <div class="background">
        //     <div class="shape"></div>
        //     <div class="shape"></div>
        // </div>
        // <form>
        //         <h3>Login</h3>

                

        //         <label for="username">Enter your Email</label>
        //         <input type="text" placeholder="Email or Phone" id="email" />

        //         <label for="password">Password</label>
        //         <input type="password" placeholder="********" id="password" />

        //         <Link to={"dash"}><button class="btn btn-primary">login</button></Link>

        //         <div>
        //             {/* <p>If you dont have an account?<a href='/sajili'><span>Register here</span></a></p> */}
        //             <p>If you dont have an account?
        //             <Link to={"sajili"}><br/><span>Register here</span></Link>
        //             </p>

        //         </div>
        //         {/* <Link to={"details"}><button class="btn btn-primary">login</button></Link> */}

        //     </form><Footer/>
        //     </div>




         <div>
             <div class="login-form">
        <h2>Login Form</h2>
          <form>

                <div class="form-group">

         <label for="teacher id">Enter your ID</label>
          <input type="text"  id="id" />
</div>
       <div class="form-group">

         <label for="username">Enter your Email</label>
          <input type="text" id="email" />
</div>
<div>
                 <label for="password">Password</label>
                 <input type="password"  id="password" />
</div>
<br/>
                 <Link to={"dash"}><button class="btn1 btn-primary">login</button></Link>

                 
                    
                     <p>If you dont have an account?
                   <Link to={"login2"}><br/><span>Register here</span></Link>
                   </p>

                 
                

             </form>

             
            </div>
</div>

        );
    }
}

export default Login;