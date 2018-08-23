import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getUserAdventuresThunk} from '../store'
import {Link} from 'react-router-dom'

class Adventures extends Component {
    constructor() {
        super()
        this.state = {
            adventures: []
        }
    }

    async componentDidMount () {
        await this.props.getAllUsersAdventures(this.props.user.id)
        await this.setState({adventures: this.props.adventures})
    }

    render() {
        const allAdventures = this.state.adventures
        const futureAdventures = allAdventures.filter(adventure => {
            const date = new Date(adventure.date)
            return Date.parse(date) >= Date.now()
        })
        const pastAdventures = allAdventures.filter(adventure => {
            const date = new Date(adventure.date)
            return Date.parse(date) < Date.now()
        })
        return (
            <div id='user-adventures' className="container col-11">
                <br/>
                <div className="instructions col-16 card bg-light mb-3 align-items-center">
                    <h5 className="card-header">Initiating an adventure for your pod</h5>
                    <div className="card-body">
                        <p className="card-text">
                            Set up your adventure by selecting a date. <br/>
                            All pod members will be texted a link to fill out the poll.
                            The tallied results will then be used to generate 3 activities. <br/>
                        </p>
                    </div>
                </div>
                <br/>

                <div className="text-center shadow-lg p-3 mb-0 bg-clear rounded shadowBox">
                <h3 style={{"fontSize":"22px"}}>your adventures</h3>
                <div id='all-user-adventures'>
                    <div id='user-future-adventures'>
                    <br/>
                        <h2 style={{"fontSize":"16px"}}>upcoming</h2>
                        <div id='future-adventures' className='text-center'>
                            {
                                futureAdventures.map(adventure => (
                                    <div id="adventure" key={adventure.id}>
                                        <h5><Link to={`/adventures/${adventure.id}`}>{adventure.name}</Link></h5>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div id='user-past-adventures'>
                    <br/>
                        <h2 style={{"fontSize":"16px"}} className='text-center'>past</h2>
                        <div id='past-adventures' className='text-left'>
                            {
                                pastAdventures.map(adventure => (
                                    <div id="adventure" key={adventure.id}>
                                        <h5><Link to={`/adventures/${adventure.id}`}>{adventure.name}</Link></h5>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div id='new-adventure-btn'>
                   <a href="/pods"><button className="btn btn-primary btn-lg btn-block">Create a New Adventure</button></a>
                </div>
                </div>
                <br/>

                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        adventures: state.user.adventures,
        users: state.pod.users,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllUsersAdventures: (id) => dispatch(getUserAdventuresThunk(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Adventures)
