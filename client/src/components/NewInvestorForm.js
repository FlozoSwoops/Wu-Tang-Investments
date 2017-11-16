import React, { Component } from 'react';

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
                <form onSubmit={this.handleSubmit} >
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

                    <button type="submit">Add A Investor </button>
                </form>

            </div>
        );
    }
}

export default NewInvestorForm;