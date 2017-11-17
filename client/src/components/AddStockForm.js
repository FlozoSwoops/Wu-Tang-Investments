import React, { Component } from 'react';
import axios from 'axios'
import jsonp from 'jsonp'
import styled from 'styled-components'

const Wrapper = styled.div`
position: center;
color: green;
text-shadow: 2px 2px 4px #000000;

a {
  text-decoration: none;
  color: black;
}
a:hover {
color: red;
}
`

class AddStockForm extends Component {

    state = {
        stockInfo: {
            symbol: ''
        },
        Newstock: {
            symbol: '',
            lastPrice: '',
            shares: ''
        },
        shares: 0
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const symbol = this.state.stockInfo.symbol
            jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${symbol}`, null, (error, data) => {
                console.log(data)
                this.setState({ Newstock: data })
            })

        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const stockInfo = { ...this.state.stockInfo }
        stockInfo[attribute] = event.target.value
        console.log("Dat Magic Doe")
        this.setState({ stockInfo })
    }

    buyStock = (event) => {
        event.preventDefault()
        this.props.createStock(this.state.Newstock)
        const emptyForm = {
            symbol: '',
            lastPrice: '',
            shares: '',
        }
        this.setState({ Newstock: emptyForm })
    }

    buyChange = (event) => {
        this.setState({shares: event.target.value})
    }


    render() {
        return (
            <Wrapper>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="symbol">  Enter Symbol</label>
                        <input onChange={this.handleChange} placeholder="Enter Name Here" value={this.state.stockInfo.symbol} type="text" name="symbol" />
                        <button>Look Up Price</button>

                    </div>


                </form>
                <h3>Current Stock info:</h3>
                <br/>
                <h3>Symbol: {this.state.Newstock.Symbol}</h3>
                <br/>
                <h3>Current Price: {this.state.Newstock.LastPrice}</h3>
                
                <form onSubmit={this.buyStock}>
                    <div>
                        <div>
                           
                            <div>
                            </div>
                            <label htmlFor="shares">  Shares: </label>
                            <input onChange={this.buyChange} placeholder="Number of Shares to Buy"  value={this.state.shares} type="number" name="symbol"></input>
                        </div>
                        <button>Buy Stock</button>

                    </div>


                </form>


            </Wrapper>
        );
    }
}

export default AddStockForm;