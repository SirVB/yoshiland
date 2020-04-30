import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import {ReactReduxFirebaseProvider,getFirebase} from 'react-redux-firebase';
import firebase from './config/fbConfig'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

const middleware = [
  thunk.withExtraArgument({ getFirebase, getFirestore })
]

const store = createStore(rootReducer,
  compose(   
    applyMiddleware(...middleware),  reduxFirestore(firebase)
  )
);
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}

ReactDOM.render(
<Provider store={store}> 
  <ReactReduxFirebaseProvider {...rrfProps}> 
    <AuthIsLoaded>
      <App /> 
    </AuthIsLoaded>
  </ReactReduxFirebaseProvider>
</Provider>, document.getElementById('root'));
