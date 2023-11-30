import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from 'react-router-dom'
import './App.css'
function Loginpage() {
    return (
        <div className='Home'> <h1>Login Page</h1>
            <form class="container d-flex flex-direction-column justify-content-center align-items-center m-2">
                <div class="col-auto d-flex">
                    <label for="text">Username:</label>
                    <input type="text" readonly class="form-control" id="username" placeholder='Enter Your Username' />
                </div>
                <div class="col-auto d-flex">
                    <label for="inputPassword2">Password:</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter Your Password" />
                </div>

                <div class="col-auto ">
                    <button type="submit" class="btn btn-primary mb-3"><label for="text">Login</label><Link to='/homepage'>Login</Link></button>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Loginpage