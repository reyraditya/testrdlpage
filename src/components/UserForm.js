import React, { Component } from 'react';
import Welcome from './Welcome';
import FormUserDetail from './FormUserDetails';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ 
            step: step + 1 
        });
    }

    // Back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ 
            step: step - 1 
        });
    }

    // Handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch(step) {
            case 1:
                return(
                    <Welcome
                    nextStep={this.nextStep}
                    />
                )
            case 2:
                return(
                    <FormUserDetail
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 3:
                return <h1>FormPersonalDetail</h1>
            case 4:
                return <h1>Confirm</h1>
            case 5:
                return <h1>Success</h1>
            default:
                return 
        }     
    }
}

export default UserForm

