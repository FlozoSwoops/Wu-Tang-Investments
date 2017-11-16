import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewInvestorForm from './NewInvestorForm'
import styled from 'styled-components'

const wrapper = styled.div`
a {
  text-decoration: none;
  color: black;
}
a:hover {
color: red;
}

`

const List = styled.ul`
font-size: 30px;
padding: 75gipx; 
@media(min-width: 1366px){
display: flex;
flex-directtion: row;
justify-content: space-around;
font-size: 30px;
padding: 75px; 
}

a {
  text-decoration: none;
  color: silver;
}
a:hover {
color: red;
}
`

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
    deleteInvestor = async (investorId) => {
        console.log(investorId)
        const response = await axios.delete(`/api/investors/${investorId}`)
        await this.setState({ investors: response.data})
    }


    render() {
        return (
            <wrapper>

                <h1>Wu Tang Investments</h1>
                <p>A subsidiary of Wu Tang Financial</p>

                <List>
                    {this.state.investors.map((investor) => {
                        return (
                            <li><Link to={`/investors/${investor.id}`}>{investor.username}</Link></li>
                                )

                })}
                </List>
                <div>
                {this.state.showForm ? <NewInvestorForm createInvestor={this.createInvestor}/>: <button onClick={this.toggleForm}>Create Investor</button>}

                {this.state.showForm ? <button onClick={this.toggleForm}>Close Form</button>: ''}
                </div>
            </wrapper>
                        );
                    }
}

                    export default homepage;