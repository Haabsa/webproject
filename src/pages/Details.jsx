import React, { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import { Link } from 'react-router-dom'
import './Details.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Details extends Component {
    render() {
        return (
            <div>
                
        <div className="container-lg">
        <div className="table-wrapper">
        
<h2 className="text-center">Subjects List</h2>
<div class="col-sm-4">
<a type="button" class="btn btn-info add-new"><i className="fa fa-plus"></i> Add New</a><br/><br/>
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
                            <tr>
                        <td>bi5n89</td>
                        <td>ali@gmail.com</td>
                        <td>java</td>
                        <td>2122</td>
                        <td>jockjkn jnknkjekj ikoiowjnc</td>
                        <td>jockjkn jnknkjekj</td>
                                {/* <Link to={"edit"} type='button' className='btn btn-sucess mx-2; btn-info EDIT'><i className='fa fa-pencil'></i></Link> */}
                                <Link  type='button' className='btn btn-info  btn-info EDIT'><i className='fa fa-pencil'></i></Link>
                                <Link type='button' className='btn btn-danger  btn-info DELETE'><i className='fa fa-trash'></i></Link>
                                <Link type='button' className='btn btn-sucess  btn-info VIEW'> <i className='fa fa-eye'></i></Link>
                            </tr>
                            <tr>
                        <td>bi5n89</td>
                        <td>ali@gmail.com</td>
                        <td>java</td>
                        <td>2122</td>
                        <td>jockjkn jnknkjekj ikoiowjnc</td>
                        <td>jockjkn jnknkjekj</td>
                                <Link type='button' className='btn btn-info  btn-info EDIT'><i className='fa fa-pencil'></i></Link>
                                <Link type='button' className='btn btn-danger  btn-info DELETE'><i className='fa fa-trash'></i></Link>
                                <Link type='button' className='btn btn-info btn-info VIEW'> <i className='fa fa-eye'></i></Link>
                            </tr>
                            <tr>
                        <td>bi5n89</td>
                        <td>ali@gmail.com</td>
                        <td>java</td>
                        <td>2122</td>
                        <td>jockjkn jnknkjekj ikoiowjnc</td>
                        <td>jockjkn jnknkjekj</td>
                                <Link  type='button' className='btn btn-info  btn-info EDIT'><i className='fa fa-pencil'></i></Link>
                                <Link type='button' className='btn btn-danger  btn-info DELETE'><i className='fa fa-trash'></i></Link>
                                <Link type='button' className='btn btn-info btn-info VIEW'> <i className='fa fa-eye'></i></Link>
                            </tr>
                            

</tbody>
</table>
</div>

</div>
</div>

            </div>
        );
    }
}

export default Details;