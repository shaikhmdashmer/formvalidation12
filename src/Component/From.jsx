
    


   
//     return (
//         <Fragment>
//             <label >user Name</label>
//             <input type="text" placeholder="user" />
//             <label >Password</label>
//             <input type="Password" placeholder="user" />
//             <button onClick={routing}> Login</button>

//         </Fragment>

//     )
// }

// export default From
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./UserList.css"
import { Router, useHistory } from "react-router";


export default function From() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const history = useHistory();
     const routing = () => {
         history.push("/AddUser")
         
    }

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

    return (
    
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
              </Form.Group>
               <Button type="submit" onClick={routing}> Login</Button>
      </Form>
            </div>
            
  );
}