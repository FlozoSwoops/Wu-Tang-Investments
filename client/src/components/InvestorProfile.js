import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class InvestorProfile extends Component {

    state = {
        investor: {},
        portfolios: []
    }
    async componentWillMount() {
        try {
            const investorId = this.props.match.params.investorId
            const response = await axios.get(`/api/investors/${investorId}`)
            console.log(response)
            this.setState({ investor: response.data })
        } catch (error) {
            console.log(error)
        }
        try {
            const investorId = this.props.match.params.investorId
            const response = await axios.get(`/api/investors/${investorId}/portfolios`)
            this.setState({ portfolios: response.data })
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (



            <div>
                <h1>{this.state.investor.name}'s Portfolios</h1>
                <div>
                Occupation: {this.state.investor.occupation}
                </div>
                <div>
                Investor: {this.state.investor.name}
                </div>
                Portfolio Types:
                <ul>
                    {this.state.portfolios.map((portfolio) => {
                        return (
                            <Link to={`/investors/${this.state.investor.id}/portfolios/${portfolio.id}`}>{portfolio.risk}</Link>

                        )
                    })}
                    {/* add cards w/ a pie chart of portfolio diversity */}
                </ul>
            </div>



        );
    }
}

export default InvestorProfile;