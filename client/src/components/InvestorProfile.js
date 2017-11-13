import React, { Component } from 'react';
import axios from 'axios'

class InvestorProfile extends Component {

    state = {
        investor: {},
        portfolio: []
    }
    async componentWillMount() {
        try { 
            const investorId = this.props.match.params.investorId
            const response = await axios.get(`/api/investors/${investorId}`)
            console.log(response)
            this.setState({ investor: response.data})
        }catch (error) {
            console.log(error)
        }
        try {
            const investorId = this.props.match.params.investorId
            const response = await axios.get(`/api/investors/${investorId}/portfolios`)
            this.setState({ portfolio: response.data})
        } catch(error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
            <h1>{this.state.investor.name}'s Portfolios</h1>
            {/* add cards w/ a pie chart of portfolio diversity */}
            </div>


        );
    }
}

export default InvestorProfile;