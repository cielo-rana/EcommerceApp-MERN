import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

  return (
    <Container>
        <Row>
            <Col md={6} className='signup_form--container'>
                <Form style={{width: '100%'}}>
                    <h1>Create an account</h1>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={email} required onChange={(e)=> setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='passsword' placeholder='Enter password' value={password} required onChange={(e)=> setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Button type='submit'>Create account</Button>
                    </Form.Group>
                    <p className='pt-3 text-center'>Don't have an account?<Link to='/signup'>Create account</Link></p>
                </Form>
            </Col>
            <Col md={6} className='signup_image--container'></Col>
        </Row>
    </Container>
  )
}

export default Signup