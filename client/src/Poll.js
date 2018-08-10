import React, { Component } from 'react';


class Poll extends Component {
  state = { users: [] }

  // componentDidMount() {
  // }

  render() {
    return (
      <div>
        <h1>This is the Poll</h1>

        <form>
  <div class="form-group">
    <label for="formControlRange">Example Range input</label>
    <input type="range" class="form-control-range" id="formControlRange">
  </div>
</form>
      </div>
    );
  }
}

export default Poll;
