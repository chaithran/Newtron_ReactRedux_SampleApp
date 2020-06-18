import React, { Component } from 'react';
import { User, Group, Organization } from 'grommet-icons';
import { Box, Button, Header, Menu, Anchor, Footer, Text, Sidebar } from 'grommet';
import Suppliers from './Suppliers';
import { SUPPLIER_MAINPAGE, COMPANIES_MAINPAGE } from "../constants/action-types";

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItem: [
                { path: "./Suppliers", name: "Suppliers" },
                { path: "./Home", name: "Companies" }
            ]
        }
        // this.handleMenuClick = this.handleMenuClick.bind(this);
    }
    handlersetMainPage = (payload) => {
        this.props.handlersetMainPage(payload);
    }
    handleClick_Suppliers = () => {
        console.log("SUPPLIER_MAINPAGE")
        this.handlersetMainPage(SUPPLIER_MAINPAGE);
    }
    handleClick_Companies = () => {
        console.log("COMPANIES_MAINPAGE")
        this.handlersetMainPage(COMPANIES_MAINPAGE);
    }

    render() {
        return (
            <Box gridArea="sidebar" width="xsmall" round="xsmall" height="100vh" margin="xsmall"
                animation={[
                    { type: "slideRight", size: "large", duration: 300 }
                ]} >
                <Sidebar colorIndex='neutral-1' background="#223E4F" round="xsmall">
                    <Box gap="small" flex='grow' justify='start' align="center">
                        <Button href='#' onClick={this.handleClick_Suppliers} hoverIndicator>
                            <Box width="6vw" background="darkcyan" round="xsmall" margin={{"top":"small"}} gap="xsmall" align="center" justify="center">
                               <Group/>
                               <Text margin="xsmall" size="small"> <strong>Suppliers</strong></Text>
                            </Box>
                         </Button>
                         <Button href='#' onClick={this.handleClick_Companies} hoverIndicator>
                            <Box width="6vw" background="darkcyan" round="xsmall" margin={{"top":"small"}} gap="xsmall" align="center" justify="center">
                               <Organization/>
                               <Text margin="xsmall" size="small"> <strong>Companies</strong></Text>
                            </Box>
                         </Button>
                         <Button href='#' onClick={this.handleClick_Companies} hoverIndicator>
                            <Box width="6vw" background="darkcyan" round="xsmall" margin={{"top":"small"}} gap="xsmall" align="center" justify="center">
                               <Organization/>
                               <Text margin="xsmall" size="small"> <strong>Products</strong></Text>
                            </Box>
                         </Button>
                    </Box>
                </Sidebar>
            </Box>

        )
    }

};
export default SideBar;