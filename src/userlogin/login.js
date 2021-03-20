
import React, {useEffect, useState} from 'react'; 
import axios from 'axios'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import Dashboard from '../dashboard'

var selectedTab;
class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    selectedTab = 0;
  }
  
  handleClick() {
    if(this.state.username == 'lalit' && this.state.password == '123')
    {
      alert('sdfgdgdgdgf');
      window.location.assign('/Dashboard');
    }
  }
  render(style) {
    
    return (
      <div className="Login">
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Login"
            />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={() => this.handleClick()} />
            {/* onClick={(event) => this.handleClick(event)} */}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;