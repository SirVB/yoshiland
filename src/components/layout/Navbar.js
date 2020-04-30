import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import Logo from '../images/yoshilogo.png'
import { connect } from 'react-redux'

const Navbar = ({auth, profile}) => {
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
    return (
       <nav className="nav-wrapper green darken-3">
            <div className="container">
                <Link to='/' className="brand-logo left"><img className='hide-on-med-and-down' id="logo" src={Logo} alt="Logo" width="60px" height="50px"/>YoshiLand</Link>
                {links}
            </div>
        </nav>
    );
}
 const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
 }

export default connect(mapStateToProps)(Navbar);