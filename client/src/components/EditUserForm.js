import React, { Component } from 'react';
import axios from 'axios'

class EditInvestorForm extends Component {


    render() {
        return (
            <div>
                <form onSubmit={this.props.updateInvestor} >
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

                    <button type="submit">Submit Changes</button>
                </form>

            </div>
        );
    }
}

export default EditInvestorForm;