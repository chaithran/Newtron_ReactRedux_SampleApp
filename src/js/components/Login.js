import React, { Component } from 'react'
import { Grommet, Main, Text, TextInput, Button, Box, FormField,TextArea  } from 'grommet'
import { FormEdit, Login as LoginIcon, UserAdd } from 'grommet-icons'
import logo from '../../../src/logo.svg';
import { Form } from 'react-bootstrap'
import '../../App.css';
import Home from './Home';
import { ModalBox } from './ModalBox';
// import {BrowserRouter as Router,Route, NavLink, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import Register from './Register';

const theme = {
    "global": {
        "colors": {
            "background": {
                "img": { logo },
                "light": "#ffffff",
                "dark": "#000000"
            }
        },
        "font": {
            "family": "-apple-system,\n         BlinkMacSystemFont, \n         \"Segoe UI\", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         \"Fira Sans\", \n         \"Droid Sans\",  \n         \"Helvetica Neue\", \n         Arial, sans-serif,  \n         \"Apple Color Emoji\", \n         \"Segoe UI Emoji\", \n         \"Segoe UI Symbol\""
        },

    },
    "button": {
        "extend": [
            { "background": "#151B54", color: "white" }
        ]
    }
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "username": '', "password": '',
            "errors": { username: '', password: '' }
        }
        this.isLoggedIn = this.props.isLoggedIn;
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'username':
                errors.username =
                    value.length < 5
                        ? 'User name must be 5 characters long!'
                        : '';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

        // this.setState({ errors, [name]: value }, () => {
        //     console.log(errors)
        // })
        const valueState = event.target.value;
        this.setState({
            ...this.state, [event.target.name]: valueState
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm(this.state.errors)) {
            this.props.handleCurrentUser(this.state.username);
            this.handleLogin(event);
        } else {
            alert("Unable to Login! Invalid details.");
        }
    }
    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }
    handleLogout = () => {
        this.props.handlerIsLoggedIn();
    }

    handleLogin = (event) => {
        console.log("entry");
        this.inputElement.click();
        event.preventDefault();
        console.log("exit");
    }
    componentWillReceiveProps(props) {
        this.setState({ isLoggedIn: props.isLoggedIn });
    }
    handleRegister = () => {
        console.log("Register");
    }
    handleTest = () => {
        console.log("close");
    }
    render() {
        const { errors } = this.state;
        return (
            <>
                {/* {this.state.isLoggedIn ? <Home/>: */}
                <Grommet theme={theme} background={logo} overflow="auto">
                    <Box>
                        <Main fill="vertical" flex="grow" pad={{ "horizontal": "large" }}
                            background={{ "position": "center", color: "#ADD8E6" }}
                            align="stretch" justify="center" margin={{ horizontal: "xlarge", vertical: "xlarge" }}>

                            <Form onSubmit={this.handleSubmit}>
                                <h2>Register</h2>
                                {/* User name */}
                                <div className='username'>
                                    <Text size="xlarge" weight="bold" color="black" >
                                        User name        </Text>
                                    <TextInput value={this.state.username} icon={<FormEdit color="black" />} placeholder="Enter User name" background="white" name="username" onChange={this.handleChange} />
                                    {errors.username.length > 0 && <span className='error'>{errors.username}</span>}
                                </div>

                                {/* Password */}
                                <div className='password'>
                                    <Text size="xlarge" weight="bold" color="black" >
                                        Password        </Text>
                                    <TextInput type="password" value={this.state.password} icon={<FormEdit color="black" />} placeholder="Enter Password" background="white" name="password" onChange={this.handleChange} />
                                    {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                                </div>
                                <Box>
                                    <Button path={Home} type="submit" label="Login" align="center" background="blue"
                                        icon={<LoginIcon color="white" />} margin={{ top: "medium" }} />
                                    <div onClick={ModalBox.open("success")} ref={input => this.inputElement = input}></div>
                                    <ModalBox id="success" handlerIsLoggedIn={this.props.handlerIsLoggedIn}>
                                        <h2>Welcome {this.state.username}! You have successfully logged In !</h2>

                                        <button onClick={ModalBox.close('success')}>Close</button>
                                    </ModalBox>

                                    <ModalBox id="register" handleRegister={this.props.handleRegister}>
                                        <Form
                                            // value={value}
                                            // onChange={value => this.setState({ value })}
                                            onSubmit={this.onSubmit}
                                        >
                                            <FormField label="Name" name="name" required />
                                            <FormField label="Email" name="email" type="email" />
                                            <FormField label="Employee ID" name="employeeId" validate={/^[0-9]+$/} />
                                            <FormField label="Size" name="size" options={['small', 'medium', 'large']} /> {/* renders RadioButtons */}
                                            <FormField label="Comments" name="comments">
                                                <TextArea name="comments" />
                                            </FormField>
                                            <Button type="submit" label="Update" />
                                        </Form>
                                        <button onClick={ModalBox.close('register')}>Close</button>
                                    </ModalBox>
                                </Box>
                                <Box align="center" justify="center" border={{ "color": "grey", "size": "small", "side": "all" }} margin={{ "top": "medium" }}>
                                    <Text textAlign="center" justify="center" size="medium" color="red" >
                                        Not yet registered ?        </Text>
                                </Box>
                                <Box>
                                    <Button label="Register here !" align="center" 
                                    onClick={ModalBox.open("register")} icon={<UserAdd color="white" />} margin={{ "top": "medium", bottom: "medium" }} />

                                </Box></Form>
                        </Main>
                    </Box>
                </Grommet>
                {/* } */}
            </>
        )
    }
}
export default Login
