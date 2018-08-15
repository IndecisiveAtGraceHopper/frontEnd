import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {getUsersThunk} from '../store'

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      userToSearch: '',
      usersFound: [],
      noUserFound: false,
      userFound: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.getUsersThunk()
  }

  handleChange(event) {
    this.setState({userToSearch: event.target.value})

  }


  handleSubmit(event) {
    event.preventDefault()
    const searchUser  = this.props.users.filter(
      elem => elem.fullName.toLowerCase().includes(this.state.userToSearch.toLowerCase())
    )

    if (!searchUser.length) {
      this.setState({
        noUserFound: true
      })
    } else {
      this.setState({usersFound: searchUser, userFound: true})


    }
  }

  render() {
    console.log("SEARCHPROPS", this.props)
    console.log("SEARCHSTATE", this.state)
    return (
      <div>

        <form onSubmit={this.handleSubmit} className="form-inline">
          <input id='searchInput' type="search" name="userToSearch" onChange={this.handleChange} className= "form-control" placeholder="Search for user" aria-label="Search"/>
          <div>
            <button type='submit'>Search</button>
          </div>
        </form>
        {this.state.noUserFound ? (
          <h4>No user found by that name</h4>
        ) : null}
        {this.state.userFound ? (
          <h4>Here are the users with that name or email:{
            <ul><li>this.state.usersFound[0].fullName</li></ul>
          }</h4>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.user.allUsers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsersThunk: () => dispatch(getUsersThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
