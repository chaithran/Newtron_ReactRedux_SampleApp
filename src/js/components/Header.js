import React, { Component } from 'react';
import { Grommet, Box, Image, Button, Stack, Text ,Grid} from 'grommet'
import { Login, Contact, Achievement, Logout, Notification } from 'grommet-icons';
import { CONTACTS_MAINPAGE, ABOUT_MAINPAGE } from "../constants/action-types";
import logo from '../../img/b4.jpg'
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
            <Box  direction="row" justify="center" pad="small"
                background="black" round="true" >
                <Box align="center" >
                    <Image src={logo}
                    // "https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg"
                        fill="true" fit="contain" />
                </Box>
                <Box align="center" >
                    <Grid
                        rows={['auto', 'flex']}
                        columns={['auto', 'flex']}
                        gap="small"
                        areas={[
                            { name: 'a', start: [0, 0], end: [1, 0] },
                            { name: 'b', start: [0, 1], end: [1, 1] },
                        ]}>
                        <Box gridArea="a" background="dark-2" >
                            <Button> <Stack anchor="top-right">
                                <Notification size="large" /><Box
                                    background="black"
                                    pad={{ horizontal: 'xsmall' }}
                                    round >
                                    <Text>8</Text>
                                </Box></Stack></Button>
                        </Box>

                        <Box gridArea="main" direction="row">
                        <Button label="Contact" name="Contact" icon={<Contact />} onClick={this.handleClick_Contact} />
                <Button label="About" value="About" icon={<Achievement />} onClick={this.handleClick_About} />
                <Button label="Logout" value="Contact" icon={<Login />} onClick={this.handleClick_LogOut} />


                        </Box>
                    </Grid>


                </Box>
               
            </Box>
        );
    }
}
export default Header;