import React, { Component } from 'react';
import { Box, Button, Header, Menu, Anchor, Footer, Sidebar } from 'grommet';
import Suppliers from './Suppliers';
import { User, Group } from 'grommet-icons';
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

            <Sidebar colorIndex='neutral-1' fixed={false} background="green">
                <Header pad='medium'
                    justify='between'> Header
                </Header>
                <Box flex='grow' justify='start' align="center">
                    <Anchor href='#' onClick={this.handleClick_Suppliers} className='active'> Suppliers </Anchor>
                    <Anchor href='#' onClick={this.handleClick_Companies}>Companies</Anchor>
                </Box>
                <Footer pad='medium'>
                    <Button icon={<User />} />
                </Footer>
            </Sidebar>

        )
    }

};
export default SideBar;