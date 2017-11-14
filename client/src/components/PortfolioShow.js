import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class PortfolioShow extends Component {
    state = {
        portfolio: {},
        stocks:[]
    }

    async componentWillMount() {
        try {
            const investorId = this.props.match.params.investorId
            const response = await axios.get(`/api/investors/${investorId}/portfolios`)
            this.setState({ portfolios: response.data })
        } catch (error) {
            console.log(error)
        }
        try {
            const investorId = this.props.match.params.investorId
            const portfolioId = this.props.match.params.portfolioId
            const response = await axios.get(`/api/investors/${investorId}/portfolios/${portfolioId}/stocks`)
            this.setState({ stocks: response.data})
            } catch(error) {
                console.log(error)}
            
            }
    
    render() {
        return (
            <div>
                Portfolio information

                
            </div>
        );
    }
}

export default PortfolioShow; 