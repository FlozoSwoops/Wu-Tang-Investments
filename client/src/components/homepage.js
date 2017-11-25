import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewInvestorForm from './NewInvestorForm'
import styled from 'styled-components'

const Button = styled.button`
height: 30px;
background-color: #a1f79c;
background-image: linear-gradient(to bottom, #a1f79c, #198a13);
border: none;
box-shadow: 5px 5px 13px #034d1a;
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

const List = styled.ul`
list-style-type: none;
margin-left: 20px;
font-size: 30px; 
@media(min-width: 1366px){
display: flex;
flex-directtion: row;
justify-content: space-around;
font-size: 30px;
padding: 75px; 
}

a {
  text-decoration: none;
  text-shadow: 2px 2px 4px #000000;
  color: white;
  text-shadow: 10px 10px 20px green
}
a:hover {
color: #27ae60;
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
        this.setState({ showForm: !this.state.showForm })
    }

    createInvestor = async (newInvestor) => {
        console.log('in hereeeeeeee') 
        const response = await axios.post(`/api/investors`, {
            "investor": newInvestor
        })
        const newInvestors = [...this.state.investors]
        newInvestors.push(response.data)
        this.setState({ investors: newInvestors })
    }

    deleteInvestor = async (investorId) => {
        console.log(investorId)
        const response = await axios.delete(`/api/investors/${investorId}`)
        await this.setState({ investors: response.data })
    }


    render() {
        return (
            <Wrapper>

                <h1>Wu Tang Investments</h1>
                <h3>A subsidiary of Wu Tang Financial</h3>

                <h5>Where we know Cash Rules everything around me except when other asset classes provide higer risk adjusted yields!</h5>

                <List>
                    {this.state.investors.map((investor) => {
                        return (
                            <li><Link to={`/investors/${investor.id}`}> {investor.username} </Link></li>
                        )

                    })}
                </List>
                <Wrapper>
                    {this.state.showForm ? <NewInvestorForm createInvestor={this.createInvestor} /> : <Button onClick={this.toggleForm}>Create Investor</Button>}

                    {this.state.showForm ? <Button onClick={this.toggleForm}>Close Form</Button> : ''}
                </Wrapper>
            </Wrapper>
        );
    }
}

export default homepage;