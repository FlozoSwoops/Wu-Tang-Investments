import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import EditUserForm from './EditUserForm'
import styled from 'styled-components'

const Button = styled.button`
height: 30px;
background-color: rgba(255 255 255 );
box-shadow: 2px 2px 4px ;
border-radius: 5px;
text-shadow: 2px 2px 4px #000000;
`
const Wrapper = styled.div`
position: center;
color: white;
text-shadow: 2px 2px 4px #000000;

a {
  text-decoration: none;
  color: black;
}
a:hover {
color: red;
}
`

class InvestorProfile extends Component {

    state = {
        investor: {},
        portfolios: [],
        editMode: false,
        editInvestor: {
            name: '',
            username: '',
            occupation: '',
            income: ''
        },
        redirectToInvestors: false
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

    toggleForm = () => {
        this.setState({editMode: !this.state.editMode})
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const editInvestor = {...this.state.editInvestor}
        editInvestor[attribute] = event.target.value
        console.log("Magic Happening")
        this.setState({ editInvestor })
    }
    updateInvestor = async (event) => {
        event.preventDefault()
        const {investorId} = this.props.match.params
        const clonedInvestor = {...this.state.editInvestor}
        console.log(clonedInvestor)
        const response = await axios.patch(`/api/investors/${investorId}`,{
            investor: clonedInvestor
        })
        console.log(response)
        this.setState({ investor: response.data})
        this.setState({ editMode: false })
    }

    deleteInvestor = async (event) => {
        const investorId = this.props.match.params.investorId
        console.log(investorId)
        const response = await axios.delete(`/api/investors/${investorId}`)
        console.log(response)
        this.setState({ investors: response.data, redirectToInvestors:true})
    }
    
    render() {
        return (



            <Wrapper>
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
                
                <div>
                {this.state.editMode ? <EditUserForm handleChange={this.handleChange} editInvestor={this.state.editInvestor} updateInvestor={this.updateInvestor}/>: <Button onClick={this.toggleForm}>Update Investor Info</Button>}

                {this.state.editMode? <Button onClick={this.toggleForm}>Close Form</Button>: ''}
                </div>
                <Button onClick={this.deleteInvestor}>Delete User</Button>
            </Wrapper>



        );
    }
}

export default InvestorProfile;