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
            <div className="col-16 card bg-light mb-3 align-items-center">
             <h5 className="card-header">Initiating an adventure for your pod</h5>
              <div className="card-body">
               <p className="card-text">
                Set up your adventure by selecting a date! <br/>
                Fill out your own poll to express preferences! <br/>
                Each pod member will be texted a link to the poll! <br/>
                Completed polls will be used to generate 3 activities!<br/>
                 </p>
            </div>
           </div>
                <h3>Upcoming Adventures</h3>
                <div id='future-adventures'>
                {
                    futureAdventures.map(adventure => (
                        <div id="adventure" key={adventure.id}>
                            <h5><Link to={`/adventures/${adventure.id}`}>{adventure.name}</Link></h5>
                        </div>
                    ))
                }
                </div>
                <h3>Past Adventures</h3>
                <div id='past-adventures'>
                {
                    pastAdventures.map(adventure => (
                        <div id="adventure" key={adventure.id}>
                            <h5><Link to={`/adventures/${adventure.id}`}>{adventure.name}</Link></h5>
                        </div>
                    ))
                }
                </div>
                <div>
                   <a href="/pods"><button className="btn btn-secondary btn-lg btn-block">Create a New Adventure</button></a>
                </div>
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
