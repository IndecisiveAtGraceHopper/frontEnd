import React, { Component } from 'react'
import '../public/App.css'
import {Navbar} from './index'

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Users</h1>
        <ul>
            {this.state.users.map(user =>
                 <li key={user.id}>{user.username}</li>
            )}
        </ul>
      </div>
    );
  }
}

export default App;
