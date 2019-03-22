import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { checkIn } from '../actions/trip'
import { StyleSheet, View, Button, Icon } from 'react-native'

export default class TripBtnComp extends Component {
  constructor(props){
    super(props)
  }

handleDelete = () => {
  this.props.checkIn()
}

  render(){
    return(
      <View style={styles.container}>
        <Button style={styles.btn} onPress={() => this.handleDelete()}>Check In </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
   btn: {
    backgroundColor: '#62c151',
    borderRadius: 20,
    opacity: 0.7,
    padding: 15,
    margin: 15
  },
})