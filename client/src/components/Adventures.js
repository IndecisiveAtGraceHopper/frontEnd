import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getUserAdventuresThunk} from '../store'

class Adventures extends Component {
    constructor() {
        super()
        this.state = {
            adventures: this.props? this.props.adventures : []
        }
    }

    componentDidMount () {
        this.props.getAllUsersAdventures(this.props.id)
    }

    render() {
        const allAdventures = this.state.adventures
        const futureAdventures = allAdventures.filter(adventure => {
            return adventure.date >= Date.now
        })
        const pastAdventures = allAdventures.filter(adventure => {
            return adventure.date < Date.now
        })
        if(this.props.pods){
            return (
            <div>
                <h2>Upcoming Adventures</h2>
                <div>
                {
                    futureAdventures.map(adventure => (
                    <div id="adventure" key={adventure.id}>
                        <h5>{adventure.name}</h5>
                        </div>
                    )
                )}
                </div>
                <h2>Past Adventures</h2>
                <div>
                {
                    pastAdventures.map(adventure => (
                    <div id="adventure" key={adventure.id}>
                        <h5>{adventure.name}</h5>
                        </div>
                    )
                )}
                </div>
            </div>
            )
        }
        return <h1>here!</h1>
    }
}

const mapStateToProps = state => {
    return {
        adventures: state.pod.adventures,
        users: state.pod.users
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getAllUsersAdventures: (id) => dispatch(getUserAdventuresThunk(id))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Adventures)
