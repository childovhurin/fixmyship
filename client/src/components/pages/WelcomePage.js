import React from "react";
import Welcome from "../Welcome/Welcome";
import Signin from "../Welcome/Signin";
import Login from "../Welcome/Login";

class WelcomePage extends React.Component {

state = {
// isLogin? probably handled by authentication...
// welcomeState = hello, signing or login ?
welcome: "welcome"

}


signinMethod = (event) => {
    console.log("sign in button");
    this.setState({welcome: "signin"})
    // this will likely need to go thru authorization and api calls and such
}
loginMethod = (event) => {
    console.log("sign in button");
    this.setState({welcome: "login"})
        // this will likely need to go thru authorization and api calls and such
}




setWelcomeState(){
switch(this.state.welcome){
    case "welcome": return <Welcome 
        loginMethod={this.loginMethod}
        signinMethod={this.signinMethod}     
        />;
    case "signin": return <Signin />;
    case "login": return <Login />;
    default: return <Welcome />;

}

}
    render() {
        return (

            <div>
                {/* we need to discuss if this will be a function or class- this page uses state */}
            this will be a cool background with 3 possible internal component options
            1. welcome (signing and login buttons)
            2. signin (username or email..., password)
            3. signin (email, username, password)
            (need to redirect to another page if user is logged in)
            {this.setWelcomeState()}
            <p>test: state is {this.state.welcome}</p>
      {/* need to add buttons to change state */}

            </div>

        );

    }
}
export default WelcomePage;