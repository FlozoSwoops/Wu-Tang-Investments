import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Form = styled.form`
position: center;
margin: auto 20% ;
background-color: rgba(255, 255, 255, .2);
color: white;
`

class StockGraphs extends Component {
    state = {
        stockInfo: []
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const symbol = this.state.stockInfo.symbol
            const response = await axios(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={symbol}&apikey=7TG1Y9BNS7A64TJU`, null, (error, data) => {
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


    render() {
        return (
            <div>
                {/* <Form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="symbol">  Enter Symbol</label>
                        <input onChange={this.handleChange} placeholder="Enter Name Here" value={this.state.stockInfo.symbol} type="text" name="symbol" />
                        <button>Look Up Price</button>

                    </div>


                </Form> */}
                    <h1>Market Research Coming Soon</h1>
            </div>
        );
    }
}

export default StockGraphs;