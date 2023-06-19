import React, { Component } from 'react';
import './Component.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends Component {
    render() {
        return (
            <div>
                
        <header>

<div class="logo">E-learning<span>System</span></div>
</header><div class="nav-btn">Menu</div>
<div class="container">

    <div class="sidebar">
        <nav>
    
            {/* <a href="#">E-learning<span>System</span></a> */}

            <ul>
                {/* <li class="fa fa-tachometer" aria-hidden="true"><a href="dash" >Dashboard</a></li> */}
                <li class="active"><a href="dash" >Dashboard</a></li>
                <li><a href="st">Student</a></li>
                <li><a href="tea">Teacher</a></li>
                <li><a href="logout">Logout</a></li>


                
            </ul>
        </nav>
    </div>

    <div class="main-content">
<h1>Dashboard</h1>
<p>welcome to our web</p>



</div>
</div>


            </div>
        );
    }
}

export default Dashboard;

