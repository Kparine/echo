import { Text, View, Image, ImageBackground, ScrollView, Picker, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Input, Button, TextInput } from 'react-native-elements'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Icon from 'react-native-vector-icons/FontAwesome'
import RNPickerSelect from 'react-native-picker-select'
import { createPro } from '../actions/profile'
import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import ProForm from '../assets/Forms/ProForm'
import styles from '../styles/editProStyle'
import { connect } from 'react-redux'
import moment from 'moment'
import HeaderComp from '../components/Header'

class UserPro extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isDateTimePickerVisible: false,
      cell: null,
      dob: null,
      gender: null,
      height: 0,
      weight: 0,
      eyeColor: null,
      vehicle: '',
      medical: ''
    }
  }
  
_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

_handleDatePicked = (date) => {
  console.log('A date has been picked: ', date)
  this._hideDateTimePicker()
  this.setState( { dob: date.toISOString() })
}

handleInchesToFeet = (value) => {
  let feet = Math.floor(value / 12)
  let inches = value % 12
  return feet + "ft " + inches + "in"
}
 
handlePickerSelect = (key, value) => {
  this.setState({[key]: value})
}

handleSubmit = () => {  
  const { navigate } = this.props.navigation
  this.props.createPro(this.state, () => navigate('Dash'))
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

render(){
  const {navigate} = this.props.navigation
  return (

        <View style={ styles.container }>
          <ImageBackground source={require('../assets/images/Lost_2.jpg')} style={styles.backgroundImage}>
            <HeaderComp navigation={this.props.navigation}/>
            <KeyboardAwareScrollView>
               <Input
                inputContainerStyle={ styles.inputContainerStyle }
                placeholder='  Cell...'
                onChangeText={this.setInputState('cell')}
                keyboardType='number-pad'
                leftIcon={
                  <Icon
                    name='phone'
                    size={30}
                    color='black'
                    shake={true}
                  />
                }
              />
              <Button 
                buttonStyle={styles.buttonStyle}
                title={
                  this.state.dob ? moment(this.state.dob).format(' MM.DD.YYYY') : ' Birthdate' 
                  }
                onPress={this._showDateTimePicker} 
                is24hour={true}  
                titleStyle={{ justifyContent: 'flex-start', paddingRight: '65%', color: '#000'}}           
                icon={
                  <Icon
                    name='calendar'
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
                mode='date'
              />
              <RNPickerSelect
                items={ProForm.gender}
                onDonePress={(key) => this.handlePickerSelect('gender', this.state.gender)}
                onValueChange={(value) => {
                this.setState({
                    gender: value,
                  });
                }}
              >
              <Button 
                buttonStyle={styles.buttonStyle}
                titleStyle={{ justifyContent: 'flex-start', paddingRight: '70%', color: '#000'}}           
                title= { this.state.gender ? this.state.gender: ' Gender' }
                icon={
                  <Icon
                    name='venus-mars'
                    size={30}
                    color='#000'
                  />
                }
                iconLeft
              />
              </RNPickerSelect>

              <RNPickerSelect
                items={ProForm.height}
                onDonePress={(key) => this.handlePickerSelect('height', this.state.height)}
                onValueChange={(value) => {
                    this.setState({
                        height: value,
                    })
                }}
              >
              <Button 
                buttonStyle={styles.buttonStyle}
                titleStyle={{ justifyContent: 'flex-start', paddingRight: '75%', color: '#000'}}           
                title= { this.state.height ? this.handleInchesToFeet(this.state.height) : ' Height' }
                icon={
                  <Icon
                    name='arrow-up'
                    size={30}
                    color='#000'
                  />
                }
                iconLeft
              />
              </RNPickerSelect>
          
              <RNPickerSelect
                items={ProForm.weight}
                onDonePress={(key) => this.handlePickerSelect('weight', this.state.weight)}
                onValueChange={(value) => {
                    this.setState({
                        weight: value,
                    })
                }}
              >
              <Button 
                buttonStyle={styles.buttonStyle}
                titleStyle={{ justifyContent: 'flex-start', paddingRight: '72%', color: '#000'}}           
                title={ this.state.weight ? `${this.state.weight} lbs` : ' Weight' }
                icon={
                  <Icon
                    name='tachometer'
                    size={30}
                    color='#000'
                  />
                }
                iconLeft
              />
              </RNPickerSelect>
            
              <RNPickerSelect
                items={ProForm.eyeColor}
                onDonePress={(key) => this.handlePickerSelect('eyeColor', this.state.eyeColor)}
                onValueChange={(value) => {
                    this.setState({
                        eyeColor: value,
                    })
                }}
              >
              <Button 
                buttonStyle={styles.buttonStyle}
                titleStyle={{ justifyContent: 'flex-start', paddingRight: '66%', color: '#000'}}           
                title= { this.state.eyeColor ? this.state.eyeColor: ' Eye Color' }
                icon={
                  <Icon
                    name='eye'
                    size={30}
                    color='#000'
                  />
                }
                iconLeft
              />
              </RNPickerSelect>
              <Input
                inputContainerStyle={ styles.inputContainerStyle }
                placeholder={ this.state.vehicle ? this.state.vehicle : '  Vehicle...'}
                onChangeText={this.setInputState('vehicle')}
                leftIcon={
                  <Icon
                    name='car'
                    size={24}
                    color='black'
                    shake={true}
                  />
                }
              />
              <Input
                inputContainerStyle={ styles.inputContainerStyle }
                placeholder='  Medical Conditions...'
                onChangeText={this.setInputState('medical')}
                leftIcon={
                  <Icon
                    name='heartbeat'
                    size={24}
                    color='black'
                    shake={true}
                  />
                }
              />

              <View style={{justifyContent: 'center', margin: 40, borderRadius: 20 }}> 
                <Button 
                  buttonStyle={ styles.btnStyle }
                  title='Confirm'
                  onPress={() => this.handleSubmit()}
                />
              </View>
            </KeyboardAwareScrollView>
          </ImageBackground>
        </View>
      )
    }
  }

 const mapStateToProps = (state) => {
  return{
    user: state.user,
    err: state.err
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createPro
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPro)