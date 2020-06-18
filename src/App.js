import React, { Component } from 'react';
import logo from './img/b7.jpg';
import './App.css';
import Login from './js/components/Login';
import { Box, Menu, Heading, Header, Text, List, Button } from 'grommet';
import { Apps } from 'grommet-icons'
import BackgroundImage from 'react-background-image';
import { findByTestId } from '@testing-library/react';
import Home from './js/components/Home';
import { connect } from 'react-redux';
import ListTmp from './js/components/ListTmp';
import { addSupplier, toggleIsLoggedIn, updateCurrentUser } from './js/actions';

const mapStateToProps = state => {
  return {
    suppliers: state.suppliers,
    isLoggedIn: state.isLoggedIn,
    currentUser: state.currentUser
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addSupplier: supplier => dispatch(addSupplier(supplier)),
    toggleIsLoggedIn: () => dispatch(toggleIsLoggedIn()),
    updateCurrentUser: (user) => dispatch(updateCurrentUser(user))
  };
}
var sectionStyle = {
  // width: "inherit",
  height: "97vh",
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
};
export class App extends Component {
  constructor(props) {
    super(props);
  }
  handlerIsLoggedIn = () => {
    { this.props.toggleIsLoggedIn() };
  }
  handleCurrentUser = (user) => {
    { this.props.updateCurrentUser(user) };
  }
  render() {
    const { isLoggedIn, addSupplier, toggleIsLoggedIn, currentUser } = this.props;
    return (
      <React.Fragment>
        {isLoggedIn
          ?
          <section style={sectionStyle}><Home /> </section>
          :
          <section style={sectionStyle} overflow="auto">

            <Box fill={true} overflow="auto" align="center" flex="grow">

              <Header background="black" direction="row" flex={false} gap="medium" fill="horizontal" pad="small">
                <Box align="start" justify="center" direction="row" gap="xsmall">
                  <Apps></Apps>
                  {/* <Text size="xlarge" weight="bold" color="white"> Welcome to Portal </Text> */}
                </Box>

                <Box align="right" direction="row" >
                  <Menu label={<Text weight="bold">Help?</Text>} round={{ side: 'top', size: 'small' }}
                    elevation="medium" hoverIndicator={true}
                    items={[{ "label": "User Guide" },
                          { "label": "Blog" }]} />
                  <Box direction="column">
                    <Menu label={<Text weight="bold">About</Text>} round={{ side: 'top', size: 'small' }}
                      elevation="medium" hoverIndicator={true}
                      items={[{ "label": "About" },
                      { "label": "Wiki" },
                      { "label": "Contact Support" }]}
                      open={false} />
                  </Box>
                </Box>

              </Header>

              {/* 
            <Box align="center" justify="center" color="white" direction="row">
              <Heading background="red" level="3"> Welcome to Portal
              </Heading>
            </Box> */}
              <Box margin={{ "top": "small" }} align="center"> <Login handlerIsLoggedIn={this.handlerIsLoggedIn.bind(this)}
                handleCurrentUser={this.handleCurrentUser.bind(this)} /> </Box>
            </Box>

          </section>
        }
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
