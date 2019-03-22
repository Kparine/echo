import {  View, StyleSheet, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Header, Text } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { signOut } from '../actions/auth'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class HeaderComp extends Component{
  constructor(props){
    super(props)
  }

SignOut() {
    Alert.alert(
      'Sign Out',
      'Are you sure...?',
      [
        {text: 'Cancel',  style: 'cancel'},
        {text: 'Confirm', onPress: () => this.props.signOut(() => this.props.navigation.navigate('SignIn'))},
      ]
    )
  }

  render(){
    return (
     <Header
        leftComponent={ <Icon
          name='corner-left-up'
          size={30}
          color='#4286f4'
          onPress={()=> this.props.navigation.goBack()}
        /> }
          rightComponent={ <Icon 
          name='log-out'
          size={30}
          color='#4286f4'
          onPress={ ()=> this.SignOut() }
          /> 
        }
        containerStyle={{
          backgroundColor: '#000',
          opacity: 0.6
        }}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authErr: state.auth.authErr,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signOut
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp)