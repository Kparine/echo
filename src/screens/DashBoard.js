import { Text, View, ImageBackground, Alert } from 'react-native'
import Icon  from 'react-native-vector-icons/FontAwesome'
import { firestoreConnect } from 'react-redux-firebase'
import { Button } from 'react-native-elements'
import HeaderComp from '../components/Header'
import { delLocation } from '../actions/trip'
import { bindActionCreators } from 'redux'
import { checkIn } from '../actions/trip'
import styles from '../styles/dashStyle'
import React, { Component } from 'react'
import { Fonts } from '../utils/Fonts'
import { connect } from 'react-redux'
import { getTrip } from '../actions/trip'

import Profile from './Profile'
import { compose } from 'redux'
import { Font } from 'expo'

class DashBoard extends Component {
  constructor(props){
    super(props)
    this.state = {
      fontLoaded: false
    }
  }

confirmCheckIn() {
    Alert.alert(
      'Check In',
      'Are you sure...?',
      [
        {text: 'Cancel',  style: 'cancel'},
        {text: 'Confirm', onPress: () => this.handleCheckIn()},
      ]
    )
  }


  handleCheckIn(){
    const { trip } = this.state
    this.props.checkIn(this.state)
    this.props.delLocation(this.state)
  }

  async componentDidMount() {
    await Font.loadAsync({ 'MajorMono': require('../assets/fonts/MajorMonoDisplay-Regular.ttf')})
   
    this.props.getTrip()

    this.setState({fontLoaded: true})  
}


  render(){
      const { navigate } = this.props.navigation      
    return(
      <View style={styles.container}>
          <ImageBackground source={require('../assets/images/Lost_2.jpg')} style={styles.backgroundImage}>
            <View>
              <HeaderComp navigation={this.props.navigation}/>
              <Text style={this.state.fontLoaded ? styles.h1 : null}>e c h o .</Text>
            </View>
          <View style={{ justifyContent: 'center', top: 250, margin: 15 }}>
          <Button 
            buttonStyle={styles.buttonStyle}
            title='P r o f i l e  '
            onPress={ () => navigate('Profile')}
            icon={
              <Icon
                name='user'
                size={30}
                color="#4286f4"
              />
            }
            iconRight
          />
           {  
             this.props.trip.notes ? 
              <Button 
                buttonStyle={styles.confirm}
                title='C h e c k  I n  '
                onPress={ () => this.confirmCheckIn()}
                icon={
                  <Icon
                    name='check'
                    size={30}
                    color='#000'
                  />
                }
                iconRight
              />
              :
              <Button 
                buttonStyle={styles.buttonStyle}
                title='C r e a t e  T r i p  '
                onPress={ () => navigate('Trip')}
                icon={
                  <Icon
                    name='rocket'
                    size={30}
                    color='#4286f4'
                  />
                }
                iconRight
              />
          }
          </View>  
          </ImageBackground>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trip: state.trip
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  checkIn,
  delLocation,
  getTrip
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)