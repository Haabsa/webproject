import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import Dashboard from '../component/Dashboard';
class View extends Component {
    render() {
        return (
            <div><NavBar/><Dashboard/>
                 <div>
            <div className="card col-md-8 offset-md-3">
                <h3 className="text-center"> View Subject Details</h3>
                
                    <div className="row">
                        <label> TeacherID: </label>
                        {/* <div> {this.state.user.firstName}</div> */}
                    </div>
                    <div className="row">
                        <label> Teacher Email: </label>
                        {/* <div> {this.state.user.lastName}</div> */}
                    </div>
                    <div className="row">
                        <label> Subject Code: </label>
                        {/* <div> {this.state.user.lastName}</div> */}
                    </div>
                    <div className="row">
                        <label> Sucject Name: </label>
                        {/* <div> {this.state.user.lastName}</div> */}
                    </div>
                    <div className="row">
                        <label> Subject Description: </label>
                        {/* <div> {this.state.user.lastName}</div> */}
                    </div>
                    <div className="row">
                        <label> Subject Link: </label>
                        
                        {/* <div> {this.state.user.emailId}</div> */}
                        
                    </div>
                </div>
            </div><Footer/>
        </div>
           
        );
    }
}

export default View;