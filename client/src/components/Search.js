import React from 'react'
import { connect } from 'react-redux'
import {getUsersThunk} from '../store'

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      userToSearch: '',
      usersFound: [],
      noUserFound: false,
      userFound: false,
      userId: null,
      podId: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.props.getUsersThunk()
  }

  handleChange(event) {
    this.setState({userToSearch: event.target.value})

  }
handleClick(event){
  event.preventDefault()
  this.setState({userId: event.target.value})
  //call the thunk to add userId + podId to the user_pods table
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
    // console.log("SEARCHPROPS", this.props)
    // console.log("SEARCHSTATE", this.state)
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
          <h4>Here are the users with that name:{
            <ul>{
              this.state.usersFound.map((user,index) => <li key={index}>{user.image}{user.fullName}<button value={user.id} onClick={this.handleClick}>Add to Pod</button></li>)
            }</ul>
          }</h4>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.searchUsers.allUsers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsersThunk: () => dispatch(getUsersThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
