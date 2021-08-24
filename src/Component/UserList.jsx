import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteUser, updateUser } from '../State/Actions';
import UserDetails from './UserDetails';
import "./UserList.css"


const UserList =() => {

     const userData = useSelector((state) => state.UserListReducer.data)
    console.log("checking user add==>", userData)
    const dispatch = useDispatch();

    const [isUpdate, setIsUpdate] = useState(false);
  
  const textRef = useRef(null);
  function editItemToState(e) {
    e.preventDefault();
    dispatch(updateUser({ message: textRef.current.value, id: userData.id }));
    setIsUpdate(false);
    textRef.current = null;
    }
    const renderForm = () => {
    return (
      <form onSubmit={editItemToState}>
        <input ref={textRef} type='text' defaultValue={userData} />
        <button type="submit" >Upadate User</button>
      </form>
    );
    };
    
     const renderItem = () => {
    return (
      <>
      <div className="TodoItem_Container">
                <div class="card">
                    {userData.map(userDetails => (
                    <div className="card_info">
                    
                            <p > Name : {userDetails.firstName}</p>
                            <p> LastName : {userDetails.lastName}</p>
                            <p> Email : {userDetails.email}</p>
                            <p> Password : {userDetails.password}</p>
                    
                            <img src={userDetails.photo} alt="pic" />
                            <p> Mobile Number : {userDetails.mobileNumber}</p>
                             <div className="Todo_buttons">
                         <button onClick={() => setIsUpdate(true)} variant="primary" >Edit</button> &nbsp;
                          <button onClick={() => dispatch(deleteUser(userData.id))} variant="danger">Delete</button>
        </div>
                        </div>
            ))}
         
          
        
        </div>
       
        </div>
      </>
    );
  };
 return (
    <>
      <p></p>
      <div>{isUpdate ? renderForm() : renderItem()}</div>
    </>
  );
};

//     // return (
//     //     <div class="card">
//     //         {userData.map(userDetails => (
//     //             <div>
//     //                 <p className="card_info"> Name : {userDetails.firstName} </p>
//     //                 <p className="card_info">LastName : {userDetails.lastName}</p>
//     //                  <p className="card_info"> Email : {userDetails.email} </p>
//     //                 <p className="card_info">Password : {userDetails.password} </p>
//     //                 <img src={userDetails.photo} alt="pic" />
//     //                 <p className="card_info"> Mobile Number : {userDetails.mobileNumber} </p>
//     //                  <button className="button-cont" type="submit"onClick={()=>dispatch(updateUser())}>Edit User</button>
    
//     //         <button className="button-cont" type="submit" onClick={()=>dispatch(deleteUser())}>Delete User</button>
//     //     </div>
                 
//     //         ))}
//     //            </div> 
           
//     // );
// };

export default UserList;