import React from 'react'
import {SendText} from './index'

class Home extends React.Component {




render(){
  return (
    <div className="container col-11">
      <br/>
      <br/>
      <div className="col-16 card bg-light mb-3 align-items-center text-center">
        <div className="card-body">
          <h2 className="card-header">Welcome!</h2>
          <br/>
            <h4 className="card-text text-center">
              Indecisive helps you and your friends uncover new adventures based on your interests!
              Invite your friends, set a date and Indecisive will take care of the rest!
            </h4>
        </div>
      </div>
      <SendText />
    </div>
  )
}

}







export default Home
