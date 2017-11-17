import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import AddStockForm from './AddStockForm'
import styled from 'styled-components'

const Wrapper = styled.div`
position: center;
color: lime;
text-shadow: 2px 2px 4px #000000;

a {
  text-decoration: none;
  color: black;
}
a:hover {
color: red;
}
`
class PortfolioShow extends Component {
    state = {
        portfolio: {},
        stocks: []
    }

    async componentWillMount() {
        try {
            const investorId = this.props.match.params.investorId
            const portfolioId = this.props.match.params.portfolioId
            const response = await axios.get(`/api/investors/${investorId}/portfolios/${portfolioId}`)
            console.log(response.data)
            this.setState({ portfolio: response.data })
        } catch (error) {
            console.log(error)
        }
        try {
            const investorId = this.props.match.params.investorId
            const portfolioId = this.props.match.params.portfolioId
            const response = await axios.get(`/api/investors/${investorId}/portfolios/${portfolioId}/stocks`)
            console.log(response.data)
            this.setState({ stocks: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    createStock = async (newStock) => {
        const investorId = this.props.match.params.investorId
        const portfolioId = this.props.match.params.portfolioId
        const response = await axios.post(`/api/investors/${investorId}/portfolios/${portfolioId}/stocks`, {
            'stock': newStock
        })
        // const newStocks = [...this.state.stocks]
        // newStocks.push(response.data)
        console.log(response)
        this.setState({ stocks: response.data})

    }

    render() {
        return (
            <Wrapper>
                <h2>Portfolio information</h2>
                   <div><span>Type: <em>{this.state.portfolio.name}</em>  Portfolio Value:<em>{this.state.portfolio.value}</em></span></div>
                   <div><span>Risk type: {this.state.portfolio.risk}</span></div>
                
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
                
                


                <AddStockForm createStock={this.createStock} />
            </Wrapper>
           
        );
    }
}

export default PortfolioShow; 