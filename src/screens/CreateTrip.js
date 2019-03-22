import { View, Image, ImageBackground, TouchableOpacity, Switch } from 'react-native'
import { ListItem, Input, Button, Avatar, Text} from 'react-native-elements'
import { getOneContact, getAllContacts } from '../actions/emergCon' 
import DateTimePicker from 'react-native-modal-datetime-picker'
import { createTrip, pinLocation } from '../actions/trip'
import { firestoreConnect } from 'react-redux-firebase'
import Icon from 'react-native-vector-icons/Feather'
import styles from '../styles/createTripStyle'
import HeaderComp from '../components/Header'
import { bindActionCreators } from 'redux'
import { getTrip } from '../actions/trip'
import React, {Component} from 'react'
import { connect } from 'react-redux' 
import { compose } from 'redux'
import Dash from './DashBoard'
import moment from 'moment'

class CreateTrip extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isDateTimePickerVisible: false,
      return: null
    }
  }
  
_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

_handleDatePicked = (date) => {
  console.log('A date has been picked: ', date)
  this._hideDateTimePicker()
  this.setState( { return: date.toISOString() })
}

handlePickerSelect = (key, value) => {
  this.setState({[key]: value})
}

handleSubmit = () => {  
  const { navigate } = this.props.navigation
  this.props.createTrip(this.state, () => navigate('Dash'))
}

setInputState = (key) => {
  return (text) => {
    this.setState(function(previousState){
      return {
        ...previousState,
        [key]: text
      }
    })
  }
}

componentDidMount(){
     this.props.getAllContacts()
     this.props.getTrip()
}

  render(){
    const {navigate} = this.props.navigation
    
    return (
      <View style={ styles.container }>
        <ImageBackground source={require('../assets/images/Lost_2.jpg')} style={styles.backgroundImage}>
            <HeaderComp navigation={this.props.navigation}/>

          <View style={ styles.boxContainer }>
            <Button 
              buttonStyle={styles.btnStyle}
              // titleStyle={{ justifyContent: 'flex-start', paddingRight: '35%' }}                          
              title='  D e s t i n a t i o n '          
              onPress={ () => navigate('Map')}
              icon={
                <Icon
                  name='map'
                  size={30}
                  color='#000'
                  paddingRight={10}
                />
              }
              iconLeft
            />
            <Button 
              buttonStyle={styles.btnStyle}
              title={
              this.state.return ? moment(this.state.return).calendar() : 'R e t u r n  ' 
              }
              onPress={this._showDateTimePicker} 
              is24hour={true}             
              icon={
                <Icon
                  name='watch'
                  size={30}
                  color='#000'
                  paddingRight={15}
                />
              }
              iconLeft
              />
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
              mode='datetime'
            />
           
          <Input
            value={this.state.notes}
            inputContainerStyle={ styles.inputContainerStyle }
            placeholder='  Description...'
            onChangeText={this.setInputState('notes')}
            leftIcon={
              <Icon
                name='edit-2'
                size={24}
                color='black'
                shake={true}
              />
            }
          />
              <Button 
              buttonStyle={styles.buttonStyle}
              title='C o n f i r m  T r i p  '
              onPress={() => this.handleSubmit()}
              icon={
                <Icon
                  name='send'
                  size={30}
                  color='#000'
                  paddingRight={10}
                />
              }
              iconLeft
              />
              </View> 
          <View style={styles.list}>
          {/* <Text> Emergency Contacts: </Text> */}
          { this.props.emergContacts &&
              this.props.emergContacts.map((l, i) => (
                <ListItem
                  key={i}
                  title={l.f_name}
                  subtitle={l.l_name}
                />
              ))
            }
          </View>
        </ImageBackground>
      </View>
    )
  }
}



const mapStateToProps = (state) => {
  return{
    emergContacts: state.emergCon.contacts,
    region: state.region,
    trip: state.trip,
    err: state.err
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllContacts,
    createTrip,
    pinLocation,
    getTrip
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip)