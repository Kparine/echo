import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' 
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './store'

import React from 'react'

import EmergContacts from './src/screens/EmergContacts'
import DashBoard from './src/screens/DashBoard'
import EditEmerg from './src/screens/EditEmerg'
import Profile from './src/screens/Profile'
import Trip from './src/screens/CreateTrip'
import EditPro from './src/screens/EditPro'
import SignIn from './src/screens/SignIn'
import SignUp from './src/screens/SignUp'
import MapScreen from './src/screens/MapScreen'

const AppNavigator = createStackNavigator({
  Emerg: EmergContacts,
  EditEmerg: EditEmerg,
  EditPro: EditPro,
  Profile: Profile,
  Dash: DashBoard,
  SignIn: SignIn,
  SignUp: SignUp,
  Trip: Trip,
  Map: MapScreen
}, 
{
  initialRouteName: 'SignIn',
  headerMode: 'none'
})

console.log('howdy')
const AppContainer = createAppContainer(AppNavigator)

function App(){
 return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>  
  )
}

export default App;