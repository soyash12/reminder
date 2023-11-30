import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
function Homepage() {
    return (
        <div>

            <div className='Home'>
                <h1>Welcome to the Reminder Application</h1>
                <p>Today is Thurday, 30th Of November.</p>
                <button><Link to='/setreminder'>Set Reminder</Link></button>
                <button><Link to='/modifyreminder'>Modify Reminder</Link></button>
                <button><Link to='/disablereminder'>Disable Reminder</Link></button>
                <button><Link to='/deletereminder'>Delete Reminder</Link></button>
                <button><Link to='/enablereminder'>Enable Reminder</Link></button>
                <button><Link to='/viewyourreminder'>View your Reminders</Link></button>

                <button type="submit" class="btn btn-primary mb-3"><label for="text">Back</label><Link to='/'>Back</Link></button>
                <Link to='/logoutpage'>Logout</Link>
            </div>

        </div>
    )
}

export default Homepage