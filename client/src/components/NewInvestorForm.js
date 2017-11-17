import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import styled from 'styled-components'

const Form = styled.form`
position: center;
margin: auto 20% ;
background-color: rgba(255, 255, 255, .2);
color: white;
`

const Button = styled.button`
height: 30px;
background-color: rgba(255 255 255 );
box-shadow: 2px 2px 4px ;
border-radius: 5px;
text-shadow: 2px 2px 4px #000000;
`
class NewInvestorForm extends Component {

    state = {
        newInvestor: {
            name: '',
            username: '',
            occupation: '',
            income: ''
        },
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const newInvestor = { ...this.state.newInvestor }
        newInvestor[attribute] = event.target.value
        console.log("Magic Happening")
        this.setState({ newInvestor })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createInvestor(this.state.newInvestor)
        const emptyForm = {
            name: '',
            username: '',
            occupation: '',
            income: ''
        }
        this.setState({ newInvestor: emptyForm })
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} >
                    <div>
                        <label htmlFor="name">  Enter Name</label>
                        <input onChange={this.handleChange} placeholder="Enter Name Here" value={this.state.newInvestor.name} type="text" name="name" />
                    </div>

                    <div>
                        <label htmlFor="username">  Enter Username</label>
                        <input onChange={this.handleChange} placeholder="Enter Username Here" value={this.state.newInvestor.username} type="text" name="username" />
                    </div>

                    <div>
                        <label htmlFor="occupation">  Enter Occupation</label>
                        <input onChange={this.handleChange} placeholder="Enter Occupation Here" value={this.state.newInvestor.occupation} type="text" name="occupation" />
                    </div>

                    <div>
                        <label htmlFor="income">  Enter Income</label>
                        <input onChange={this.handleChange} placeholder="Enter Income Here" value={this.state.newInvestor.income} type="text" name="income" />
                    </div>

                    <Button type="submit">Add A Investor </Button>
                </Form>

            </div>
        );
    }
}

export default NewInvestorForm;