
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../State/Actions';
import UserList from './UserList';

const AddUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

   

    const dispatch = useDispatch();
    const addUserHandler = (e) => {
        e.preventDefault();
        dispatch(addUser({firstName : firstName,lastName:lastName,email:email,password:password,mobileNumber:mobileNumber,photo:photo}))

         }
    return (
        <div>
            
                <form onSubmit={addUserHandler} >
                    <label >First Name:</label>
                <input type="text" placeholder="username" value={firstName || ""} onChange={e => setFirstName(e.target.value) }/> <br/>
                    <label >Last Name:</label>
                    <input type="text" placeholder="username" value={lastName || ""} onChange={e =>setLastName(e.target.value)}  /><br/>
                    <label >Email Id:</label>
                <input type="email" placeholder="username@gmail.com" value={email || ""} onChange={e => setEmail(e.target.value)}/><br/>
                    <label >Password:</label>
                <input type="password" placeholder="password" value={ password || ""} onChange={e => setPassword(e.target.value)}/><br/>
                
                
                    <label for="img">Select image:</label>
  


                    <input type="file" id="img" name="img" accept="image/*"  value={photo || ""} onChange={e => setPhoto(e.target.value)} /><br/>
                    <label >Mobile Number:</label>
                    <input type="number" placeholder="123789456" value={mobileNumber || ""} onChange={e => setMobileNumber(e.target.value)} /> <br/>
                    
                    <button type="submit">Add User</button>
                    
            </form>
            <div>
        
                    <UserList />
                
            </div>
        </div>
    );
};

export default AddUser;