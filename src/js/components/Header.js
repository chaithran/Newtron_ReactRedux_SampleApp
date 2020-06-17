import React, { Component } from 'react';
import { Grommet, Box, Image, Button } from 'grommet'
import { Login, Contact, Achievement, Logout } from 'grommet-icons';
import { CONTACTS_MAINPAGE, ABOUT_MAINPAGE } from "../constants/action-types";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "isLoggedIn": false,
            "showLogin": false,
        }
    }
    handlersetMainPage = (payload) => {
        this.props.handlersetMainPage(payload);
    }
    handleClick_About = () => {
        console.log("About")
        this.handlersetMainPage(ABOUT_MAINPAGE);
    }
    handleClick_Contact = () => {
        console.log("contact")
        this.handlersetMainPage(CONTACTS_MAINPAGE);
    }
    handleClick_LogOut = () => {
        console.log("logout")
        this.props.handlerToggleIsLoggedIn();
    }
    render() {
        return (
            <Box overflow="auto" align="center" flex="grow" direction="row" justify="center" pad="large"
                background="grey" round="true" >
                <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg"
                    round="true" fit="contain" align="left" />
                <Button label="Contact" name="Contact" icon={<Contact />} onClick={this.handleClick_Contact} />
                <Button label="About" value="About" icon={<Achievement />} onClick={this.handleClick_About} />
                <Button label="Logout" value="Contact" icon={<Login />} onClick={this.handleClick_LogOut} />
            </Box>
            // <Box>
            //     {/* <Navigation /> */}
            // </Box>
            // <Box>
            //     {
            //         // this.state.isLoggedIn ? <Button icon={<Logout />} label="Logout" onClick={this.toggleFn} /> :
            //         //     <LoginPage isLoggedIn={this.state.isLoggedIn}>Login Page Render</LoginPage>
            //     }
            // </Box>
            // </Grommet>
        );
    }
}
export default Header;