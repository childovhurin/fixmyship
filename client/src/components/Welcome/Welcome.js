import React from 'react';


function Welcome(props) {
    return (
        <div>
            Welcome Screen with login and signin buttons
            {/* onclick for buttons will be loginMethod or signinMethod */}
            <button onClick={
                props.signinMethod} 
            >Sign in (placeholder test button)
            </button>
            <button onClick={
                props.loginMethod}
            >Log in (placeholder test button)
             </button>
        </div>
    );
}

export default Welcome;

