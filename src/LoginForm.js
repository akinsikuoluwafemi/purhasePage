import React from 'react';

function LoginForm () {
    return (
        <form>
            <label>UserName:</label>
            <input type="text" placeholder="What is your name" /> <br/>
            <label >Password:</label>
            <input type="password" placeholder="What is your password"/>
       </form>
    )
}

export default LoginForm;