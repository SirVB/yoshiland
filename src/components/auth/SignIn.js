import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
      }
   handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
   }
   handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() { 
        const { auth, authError } = this.props;
        if(auth.uid) return <Redirect to="/" />
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5><hr/>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <div className="row">
                                <button id="sign" className="btn pink lighten-1">Login</button>
                                <button id="cancel" className="btn grey darken-1">Cancel</button>
                            </div>
                        </div>
                        <div className="red-text center">
                        { authError ? <p>{ authError }</p> : null }
                        </div>
                </form>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

 const mapDispatchToProps = (dispatch) => {
        return {
            signIn: (creds) =>  dispatch(signIn(creds))
        }
 }

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);