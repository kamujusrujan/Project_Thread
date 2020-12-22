import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Register.css';

function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address,setAddress] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
      <div className="Register">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label className='Register-item'>Email</Form.Label>
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
          <Form.Group size="lg" controlId="address">
            <Form.Label className='Register-item2'>Address</Form.Label>
            <Form.Control
              type="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Button className="Register-btn" block size="lg" type="submit" disabled={!validateForm()}>
            Register
          </Button>
                  
          
        </Form>
      </div>
    );
}

export default Register;