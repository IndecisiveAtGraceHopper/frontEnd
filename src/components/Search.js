import React from 'react'
import { connect } from 'react-redux'
import {getUsersThunk, createUserPodThunk} from '../store'

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

  async handleClick(event){

    event.preventDefault()
    this.props.createUserPodThunk(event.target.value, this.props.podId)
  }

  handleSubmit (event) {
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id='searchInput' type="search" name="userToSearch" onChange={this.handleChange} className="form-control mx-sm-3" placeholder="Search for & add friends to pod!" aria-label="Search"/>
          <div>
            <button className="btn btn-dark btn-lg btn-block" type='submit'>Search</button>
          </div>
        </form>
        {this.state.noUserFound ? (
          <h4>No user found by that name</h4>
        ) : null}
        {this.state.userFound ? (
          <div id='found-users'>
          <h4 className="font-weight-normal">Here are the users with that name:</h4>
            <div>
              {
                this.state.usersFound.map((user,index) =>
                  <div key={index} id='found-user-card'>
                    <h5>{user.fullName}</h5>
                    <button id='add-to-pod-button' className="btn btn-dark btn-lg" value={user.id} onClick={this.handleClick}>Add to Pod</button>
                  </div>
                )
              }
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.searchUsers.allUsers,
    userId: state.user.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsersThunk: () => dispatch(getUsersThunk()),
    createUserPodThunk: (userId, podId) => dispatch(createUserPodThunk(userId, podId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
