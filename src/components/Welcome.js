import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


export class Welcome extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="text-center">
                        <h1>Welcome to Sign Up Page!</h1>
                        <p>To join our community, please sign up first. Please click "Continue" to begin the process.</p>
                    </div>
                    <div className="text-center">
                        <RaisedButton
                        label="Continue"
                        primary={true}
                        onClick={this.continue}                        
                        />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Welcome
