import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class PortfolioShow extends Component {
    state = {
        portfolio: {},
        stocks: []
    }

    async componentWillMount() {
        try {
            const investorId = this.props.match.params.investorId
            const response = await axios.get(`/api/investors/${investorId}/portfolios`)
            this.setState({ portfolio: response.data })
        } catch (error) {
            console.log(error)
        }
        try {
            const investorId = this.props.match.params.investorId
            const portfolioId = this.props.match.params.portfolioId
            const response = await axios.get(`/api/investors/${investorId}/portfolios/${portfolioId}/stocks`)
            this.setState({ stocks: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h2>Portfolio information</h2>
                   <div><span><em>{this.state.portfolio.name}</em>  <em>{this.state.portfolio.value}</em></span></div>
                   <div><span>{this.state.portfolio.risk}</span></div>
                
                <h3>Stocks</h3>

                <div>
                    {this.state.stocks.map((stock) => {
                        return(
                            <ul>
                                <li><h4>{stock.symbol} {stock.lastprice} {stock.shares}</h4></li>
                            </ul>
                        )
                    })}
                </div>
                



            </div>
        );
    }
}

export default PortfolioShow; 