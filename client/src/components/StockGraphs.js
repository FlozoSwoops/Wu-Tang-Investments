import React, { Component } from 'react';
import axios from 'axios'


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
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="symbol">  Enter Symbol</label>
                        <input onChange={this.handleChange} placeholder="Enter Name Here" value={this.state.stockInfo.symbol} type="text" name="symbol" />
                        <button>Look Up Price</button>

                    </div>


                </form>

            </div>
        );
    }
}

export default StockGraphs;