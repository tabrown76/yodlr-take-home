import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import YodlrApi from '../Api';
import "../styles/Forms.css"

const SignupForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        state: 'pending'
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const postData = async(formData) => {
        try {
            await YodlrApi.registerUser(formData);
            console.log(formData)
        } catch(e) {
            console.error(`Error:`, e);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(formData);
        setFormData({
            firstName: '',
            lastName: '',
            email: ''
        });
        navigate('/users');
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input 
                    className="Form-input text-input" 
                    type="text" 
                    name="firstName" 
                    id="firstName" 
                    placeholder="First Name" 
                    onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input 
                    className="Form-input text-input" 
                    type="text" 
                    name="lastName" 
                    id="lastName" 
                    placeholder="Last Name" 
                    onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input 
                    className="Form-input" 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email" 
                    onChange={handleChange} />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </>
    )
}

export default SignupForm;