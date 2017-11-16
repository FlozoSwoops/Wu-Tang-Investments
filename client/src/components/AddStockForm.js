import React, { Component } from 'react';
import axios from 'axios'
import jsonp from 'jsonp'


class AddStockForm extends Component {

    state = {
        stockInfo: {
            symbol: ''
        },
        Newstock: {
            symbol: '',
            lastPrice: '',
            shares: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const symbol = this.state.stockInfo.symbol
            jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${symbol}`, null, (error, data) => {
                console.log(data)
                this.setState({ Newstock: data })
            })
            
            
            // console.log(this.state.NewStock.lastPrice)
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const stockInfo = {...this.state.stockInfo}
        stockInfo[attribute] = event.target.value
        console.log("Dat Magic Doe")
        this.setState({stockInfo})   
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="symbol">  Enter Symbol</label>
                        <input onChange={this.handleChange} placeholder="Enter Name Here" value={this.state.stockInfo.symbol} type="text" name="symbol" />
                    </div>

                    {/* <div>
                        {this.state.Newstock.lastprice}
                    </div> */}
                </form>

            </div>
        );
    }
}

export default AddStockForm;