import React, { Component } from 'react'
import { Grommet, Form, FormField, TextInput, CheckBox, Paragraph, Button } from 'grommet'
import { FormEdit, Mail, Lock, UserAdd } from 'grommet-icons'
import { ModalBox } from './ModalBox';


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "firstname": '', "lastname": '', "email": '', "password": '', "repassword": '', "checked": true,
            "errors": { firstname: '', lastname: '', email: '', password: '', repassword: '', checked: '' }
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        //  firstname, lastname,email, password,repassword, checked 
        switch (name) {
            case 'firstname':
                errors.firstname =
                    value.length < 5
                        ? 'First name must be 5 characters long!'
                        : '';
                break;
            case 'lastname':
                errors.lastname =
                    value.length < 3
                        ? 'Last name must be 3 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    value.length < 8
                        ? 'enter valid mail!'
                        : '';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            case 'repassword':
                errors.repassword =
                    value !== this.state.password
                        ? 'Re entered password does not match!'
                        : '';
                break;
            case 'checked':
                errors.checked =
                    value == false
                        ? 'Please accept terms of use!'
                        : '';
                break;
            default:
                break;
        }
        const valueState = event.target.value;
        this.setState({
            ...this.state, [event.target.name]: valueState
        });
    }

    handleSubmitReg = (event) => {
        event.preventDefault();
        if (this.validateFormReg(this.state.errors)) {
            this.inputElementReg.click();
            this.inputElementNew.click();
        } else {
            alert("Unable to Register! Invalid details.");
        }
    }
    validateFormReg = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }
    render() {
        const { errors } = this.state;
        return (
            <Form >
                <FormField label="First Name" color="accent-1" name="firstname">
                    <TextInput placeholder="Enter your name" name="firstname" required onChange={this.handleChange} size="medium" type="text" icon={<FormEdit />} />
                    {errors.firstname.length > 0 && <span className='error'>{errors.firstname}</span>}

                </FormField>
                <FormField label="Last Name" name="lastname" color="accent-1">
                    <TextInput icon={<FormEdit />} name="lastname" required onChange={this.handleChange} placeholder="Enter your last name" name="lastname" />
                    {errors.lastname.length > 0 && <span className='error'>{errors.lastname}</span>}

                </FormField>
                <FormField label="Email" name="email" >
                    <TextInput placeholder="Enter your email address" required onChange={this.handleChange} name="email" icon={<Mail />} />
                    {errors.email.length > 0 && <span className='error'>{errors.email}</span>}

                </FormField>
                <FormField label="Password" color="accent-1" name="firstname" required onChange={this.handleChange} name="password" >
                    <TextInput icon={<Lock />} placeholder="Choose password" name="password" required onChange={this.handleChange} type="password" />
                    {errors.password.length > 0 && <span className='error'>{errors.password}</span>}

                </FormField>
                <FormField label="Re-enter Password" >
                    <TextInput type="password" icon={<Lock />} name="repassword" required onChange={this.handleChange} placeholder="Enter your password again" />
                    {errors.repassword.length > 0 && <span size="12" className='error'>{errors.repassword}</span>}

                </FormField>
                <FormField>
                    <CheckBox name="checked" required onChange={this.handleChange} />
                    <Paragraph fill={true} size="medium" color="active-text">
                        I accept the Terms of  Use and Privacy Policy
        </Paragraph>
                    {errors.checked.length > 0 && <span className='error'>{errors.checked}</span>}
                </FormField>


                <Button label="Register Now" icon={<UserAdd />} active={true} fill="horizontal" gap="small" hoverIndicator={true} plain={false} primary={false} reverse={false} secondary={false} size="large" onClick={this.handleSubmitReg} color="graph-3"
                />
                <div onClick={ModalBox.close("register")} ref={input => this.inputElementReg = input}></div>
                <div onClick={ModalBox.open("success_reg")} ref={input => this.inputElementNew = input}></div>
                <ModalBox id="success_reg">
                    <Button onClick={ModalBox.close('success_reg')}>Close</Button>
                    <h2>Hi ! User Registered successfully !</h2>

                </ModalBox>
            </Form>
        )
    }
}
export default Register;
