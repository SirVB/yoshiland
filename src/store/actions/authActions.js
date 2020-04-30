import firebase, { db } from '../../config/fbConfig';
import 'firebase/auth';
import 'firebase/firestore';

export const signIn = (credentials) => {
  return ( dispatch, getState) => {
    
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS'})
    }).catch(err => {
      dispatch({ type: 'LOGIN_ERROR', err})
    })

  }
}   

export const signOut = () => {
  return (dispatch, getState) =>{

    firebase.auth().signOut().then(() => {
      firebase.logout();
      dispatch({type: 'SIGNOUT_SUCCESS' });
    });
  }
}

export const signUp = (newUser) => {
  return(dispatch, getState, firestore) =>{

     firebase.auth().createUserWithEmailAndPassword(
       newUser.email,
       newUser.password
     ).then((response) => {
       return db.collection('users').doc(response.user.uid).set({
         email: newUser.email,
         firstname: newUser.firstname,
         lastname: newUser.lastname,
         initials: newUser.firstname[0] + newUser.lastname[0]
       })
     }).then(() => {
       dispatch({type: 'SIGNUP_SUCCESS'});
     }).catch(err =>{
       dispatch({type: 'SIGNUP_ERROR', err})
     })
  }

}