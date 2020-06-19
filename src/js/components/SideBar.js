import React, { Component } from 'react';
import { Box, Button, Header, Menu, Anchor, Footer, Text, Sidebar } from 'grommet';
import Suppliers from './Suppliers';
import { User, Group,Organization  } from 'grommet-icons';
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
            <>
                {/* <Sidebar fixed={true} background="grey"> */}

                {/* <Header pad='medium'
                        justify='between'> Header
                </Header> */}

                <Box
                    background="#32364d"
                    width="auto"
                    height="small"
                    animation={[
                        { type: "fadeIn", duration: 300 },
                        { type: "slideRight", size: "xlarge", duration: 150 }
                    ]}
                    hoverIndicator border={{color:'dark-3'}}
                    margin={{ horizontal: "small", vertical: "small" }}>
                        <Button label="Suppliers" icon={<Group />} onClick={this.handleClick_Suppliers}
                         active={true} color="dark-3" fill="vertical"
                         hoverIndicator={true} margin="medium" primary={false} reverse={false} 
                         secondary={false} size="xlarge" />
                        
                        </Box>

                        <Box
                    background="#32364d"
                    width="auto"
                    height="small"
                    animation={[
                        { type: "fadeIn", duration: 300 },
                        { type: "slideRight", size: "xlarge", duration: 150 }
                    ]}
                    hoverIndicator border={{color:'dark-3'}}
                    margin={{ horizontal: "small", vertical: "small" }}>
                         <Button label="Companies" icon={<Organization  />} onClick={this.handleClick_Companies}
                         active={true} color="dark-3" fill="vertical"
                         hoverIndicator={true} margin="medium" primary={false} reverse={false} 
                         secondary={false} size="xlarge" />
                </Box>
                <Footer pad='medium'>
                    <Button icon={<User />} />
                </Footer>
            </>


        )
    }

};
export default SideBar;