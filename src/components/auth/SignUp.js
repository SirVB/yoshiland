import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
      }
   handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
   }
    
   handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
   
    render() { 
        const { auth, authError } = this.props
        if(auth.uid) return <Redirect to="/" />
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5><hr/>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" id="firstname" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" id="lastname" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <div className="row">
                                <button id="sign" className="btn pink lighten-1">Sign Up</button>
                                <button id="cancel" className="btn grey darken-1">Cancel</button>
                            </div>
                        <div className="red-text center">
                            { authError ? <p>{ authError }</p> : null }
                        </div>
                        </div>
                </form>
            </div>
         );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (newUser) =>  dispatch(signUp(newUser))
    }
}

const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);