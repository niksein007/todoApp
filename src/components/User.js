import React from 'react'
import Login from './Login'
import Register from './Register'

class User extends React.Component{

    state={
        userExist:true,
    }

    formHandler=(e)=>{
        e.preventDefault()
        // do some stuff then run the loggedIn() in App
        this.props.loggedIn()
    }

    render(){
    return(
        <div className='Login'>
        <form onSubmit={this.formHandler}>
            <fieldset>
                <legend>Enter Details</legend>
           {this.state.userExist ? <Login /> : <Register/>}
            <input type='submit'></input>
            </fieldset>
        </form>
        </div>
    )
}
}
export default User