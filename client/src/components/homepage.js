import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class homepage extends Component {

    state = {
        investors: [],
    }


    async componentWillMount() {
        try {
            const response = await axios.get("api/investors")
            this.setState({ investors: response.data })
        } catch (error) {
            console.log(error)
        }
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
               
            </div>
                        );
                    }
}

                    export default homepage;