import React, { Component } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends Component {
    render() {
        return (
            <div>
                <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div><form>
                <h3>Login</h3>

                

                <label for="username">Enter your Email</label>
                <input type="text" placeholder="Email or Phone" id="email" />

                <label for="password">Password</label>
                <input type="password" placeholder="********" id="password" />

                <Link to={"dash"}><button class="btn btn-primary">login</button></Link>
                {/* <Link to={"details"}><button class="btn btn-primary">login</button></Link> */}

            </form>
            </div>
        );
    }
}

export default Login;