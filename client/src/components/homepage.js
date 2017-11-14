import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewInvestorForm from './NewInvestorForm'


class homepage extends Component {

    state = {
        investors: [],
        showForm: false
    }


    async componentWillMount() {
        try {
            const response = await axios.get("api/investors")
            this.setState({ investors: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    toggleForm = () => {
        this.setState({showForm: !this.state.showForm})
    }

    createInvestor = async (newInvestor) => {
        const response = await axios.post(`/api/investors`,{
            "investor": newInvestor
        })
        const newInvestors = [...this.state.investors]
        newInvestors.push(response.data)
        this.setState({ investors: newInvestors })
    }


    render() {
        return (
            <div>

                <h1>Wu Tang Investments</h1>
                <p>A subsidiary of Wu Tang Financial</p>

                <ul>
                    {this.state.investors.map((investor) => {
                        return (
                            <li><Link to={`/investors/${investor.id}`}>{investor.username}</Link></li>
                                )

                })}
                </ul>
                <div>
                {this.state.showForm ? <NewInvestorForm createInvestor={this.createInvestor}/>: <button onClick={this.toggleForm}>Create Investor</button>}

                {this.state.showForm ? <button onClick={this.toggleForm}>Close Form</button>: ''}
                </div>
            </div>
                        );
                    }
}

                    export default homepage;