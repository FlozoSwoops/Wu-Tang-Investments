import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Form = styled.form`
position: center;
margin: auto 20% ;
background-color: rgba(255, 255, 255, .2);
color: white;

label {
    color: white;
    text-size: 50px
}

input::placeholder {
    color: white;
}
`
const Button = styled.button`
height: 30px;
background-color: #a1f79c;
background-image: linear-gradient(to bottom, #a1f79c, #198a13);
border: none;
box-shadow: 5px 5px 13px #034d1a;
border-radius: 5px;
text-shadow: 2px 2px 4px #000000;
`

class EditInvestorForm extends Component {


    render() {
        return (
            <div>
                <Form onSubmit={this.props.updateInvestor} >
                <div>
                    <label htmlFor= "name">  Enter Name</label>
                    <input onChange={this.props.handleChange} placeholder="Post Name Here" value={this.props.editInvestor.name} type="text" name="name"/>
                    </div>

                    <div>
                    <label htmlFor="username">  Enter Username</label>
                    <input onChange={this.props.handleChange} placeholder="Post Username Here" value={this.props.editInvestor.username} type ="text" name ="username"/>
                    </div>

                    <div>
                    <label htmlFor= "occupation">  Enter Occupation</label>
                    <input onChange={this.props.handleChange} placeholder="Post Occupation Here" value={this.props.editInvestor.occupation} type="text" name ="occupation"/>
                    </div>

                    <div>
                    <label htmlFor= "income">  Enter Income</label>
                    <input onChange={this.props.handleChange} placeholder="Enter Income Here" value={this.props.editInvestor.income} type ="text" name="income"/>
                    </div>

                    <Button type="submit">Submit Changes</Button>
                </Form>

            </div>
        );
    }
}

export default EditInvestorForm;