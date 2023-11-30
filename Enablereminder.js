import React from 'react'
import { Link } from 'react-router-dom'
function Enablereminder() {
  return (
    <div className='Home'>
            <h1>Enable Reminder</h1>
            <div><lable>Select Date</lable><input type='date' /></div>

            <div>
                <lable>Select Subject: </lable>
                <select name="" id="">
                    <option>Data Mining</option>
                    <option>Web Design</option>
                    <option>Software Architecture</option>
                    <option>Wireless Network</option>
                    <option>Data Structure</option>
                </select>
            </div>

            <div>
                <lable>Reminders: </lable>
                <select name="" id="">
                    <option>07:AM FRESH</option>
                    <option>08:AM EATING FOOD</option>
                    <option>10:AM GO TO COLLEGE</option>
                    <option>01:PM LUNCH TIME</option>
                    <option>05:PM RETURN HOME</option>
                    <option>07:PM STUDY TIME</option>
                    <option>11:PM SLEEP</option>
                </select>
            </div>

            <div><lable>Add description:</lable><input type='text' placeholder='please Enter Here'/> </div>
            <div><lable>Email Address: </lable><input type='text' placeholder='Enter Your Email Address'/> </div>
            <div><lable>Contact No: </lable><input type='text' placeholder='Enter Your Contact No'/> </div>
            <div><lable>SMS No: </lable><input type='text' placeholder='Enter Your SMS No'/> </div>

            <div className='checkbox'>
                <lable>Recur for next: </lable>
                <input type="checkbox" /><label>7 Days</label>
                <input type="checkbox" /><label>5 Days</label>
                <input type="checkbox" /><label>3 Days</label>
                <input type="checkbox" /><label>2 Days</label>
            </div>

            <div>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Back</label><Link to='/homepage'>Back</Link></button>
                <button type="submit" class="btn btn-primary mb-3"><label for="text">Confirm</label><Link>Confirm</Link></button>
                <Link to='/logoutpage'>Logout</Link>
            </div>
        </div>
  )
}

export default Enablereminder