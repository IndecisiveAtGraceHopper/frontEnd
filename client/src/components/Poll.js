import React, { Component } from 'react';


class Poll extends Component {
  state = { users: [] }

  // componentDidMount() {
  // }

  render() {
    return (
      <div className="container">
        <h1>This is the Poll</h1>
        <form>
          <div className="form-group form-check">
            <div>
              <label htmlFor="formControlRange">cost</label>
              <input type="range" className="form-control-range" id="formControlRange"/>
            </div>
            <div>
              <label htmlFor="formControlRange">interactivity</label>
              <input type="range" className="form-control-range" id="formControlRange"/>
            </div>
            <div>
              <label htmlFor="formControlRange">artsy</label>
              <input type="range" className="form-control-range" id="formControlRange"/>
            </div>
            <div>
              <label htmlFor="formControlRange">food</label>
              <input type="range" className="form-control-range" id="formControlRange"/>
            </div>
            <div>
              <label htmlFor="formControlRange">drinks</label>
              <input type="range" className="form-control-range" id="formControlRange"/>
          </div>
         </div>
        </form>
      </div>
    );
  }
}

export default Poll;
