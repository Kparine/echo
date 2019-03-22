import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reactReduxFirebase, firebaseReducer, getFirebase } from 'react-redux-firebase'
import { createFirestoreInstance, reduxFirestore, firestoreReducer, getFirestore } from 'redux-firestore' // <- needed if using firestore
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import emergCon from './src/reducers/emergCon'
import auth from './src/reducers/auth'
import profile from './src/reducers/profile'
import trip from './src/reducers/trip'
import config from './.env.json'


const fbConfig = {
  apiKey: config.API_KEY_FIRESTORE,
  authDomain: "getlost-8f28b.firebaseapp.com",
  databaseURL: "https://getlost-8f28b.firebaseio.com",
  projectId: "getlost-8f28b",
  storageBucket: "getlost-8f28b.appspot.com",
  messagingSenderId: "883159106430"
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore

// Add firebase to reducers
const rootReducer = combineReducers({
  auth, emergCon, profile, trip,
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
export const store = createStore(
  rootReducer, 
  compose ( 
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }), logger),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase)
  )
)
