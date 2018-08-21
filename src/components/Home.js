import React from 'react'


class Home extends React.Component {




render(){
  return (
    <div className="container col-4">
    <br/>
    <br/>
      <h4 className="text-center font-weight-normal">Welcome!</h4><br/>
       <h5 className="font-weight-normal">Indecisive helps you and your friends uncover new adventures based on your interests!
       Invite your friends, initiate an adventure and we will take care of the rest! <br/>
       <br/>

       Based on a poll that everyone fills out about location
       and activity preferences, we will evaluate everyone's interest and suggest a few fun activities that everyone will like! </h5>

      <br/>

      <div className="card border-light align-items-center">
      <h5 className="card-header ">Setting up your profile</h5>
     <div className="card-body">
             <p className="card-text">
              <br/>
              1.  Select one of the awesome avatars <br/>
              2.  Insert your phone number so you can be notified when you are invited on an adventure <br/>
              3.  Your address, we will use it when we generate activities(you can always update!)  <br/>
              4.  Invite your friends to sign up so you can plan adventures together! <br/>
               </p>
         </div>
    </div>

     <div className=" col-16 card border-light mb-3 align-items-center">
      <h5 className="card-header">Creating a pod with your friends</h5>
     <div className="card-body">
             <p className="card-text">
              <br/>
              1.  Create a pod by giving your pod a name and selecting an image <br/>
              2.  Search for your friends and add them to your pod, or invite them if they don't have an account <br/>
              2.  Once you've added all of your friends to your pod, you can create an adventure! <br/>
               </p>
         </div>
    </div>

    <div className="card border-light mb-3 align-items-center">
      <h5 className="card-header">Initiating an adventure for your pod</h5>
     <div className="card-body">
             <p className="card-text">
              <br/>
              1.  Set up your adventure by selecting a date <br/>
              2.  Fill out your own poll! <br/>
              3.  Each pod member will receive text-message with a link to the poll <br/>
              3.  Once all polls are completed, we will evaluate all preferences to generate 3 options<br/>
               </p>
         </div>
    </div>

     <div className="card border-light mb-3 align-items-center">
      <h5 className="card-header">Selecting final activity</h5>
     <div className="card-body">
           <h5 className="card-title"> </h5>
             <p className="card-text">
              <br/>
              1.  All pod members can review the suggested activities, and vote for the most appealing<br/>
              2.  Once a final activity is selected, you can save the date for your exciting adventure!
               </p>
         </div>
    </div>


    </div>
  )
}

}

export default Home
