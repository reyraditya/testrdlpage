import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RadioButton from 'material-ui/RadioButton';
import { RaisedButton } from 'material-ui';


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    render() {
        const { values, handleChange } = this.props
        return (
            <MuiThemeProvider>
              <React.Fragment>
                  <AppBar title="Enter User Detail" />
                  <TextField 
                    hintText="Enter your first name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                  />
                  <br/>
                  <TextField 
                    hintText="Enter your last name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                  />
                  <br/>
                  <TextField 
                    hintText="Enter your email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                  />
                  <br/>
                  <RaisedButton 
                    label="Continue"
                    primary={true}
                    style={styles.button}
                  />
              </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}


export default FormUserDetails
