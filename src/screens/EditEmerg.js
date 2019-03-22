import { Text, View, Image, ImageBackground, ScrollView, Picker, TouchableOpacity} from 'react-native'
import { createEmerg, readEmerg, getOneEmerg } from '../actions/emergCon'
import { Input, Button, TextInput } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderComp from '../components/Header'
import styles from '../styles/editEmergStyle'
import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux'


class EditEmerg extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
     f_name: '',
     l_name: '',
     emerg_cell: null,
     email: null,
    }
  }

handleSubmit = () => {  
  console.log(this.state)
  const { navigate } = this.props.navigation
  this.props.createEmerg(this.state, () => navigate('Dash'))
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
        <View style={ styles.boxContainer }>
          <Input
            inputContainerStyle={ styles.inputContainerStyle }
            placeholder=' First Name'
            onChangeText={this.setInputState('f_name')}
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
              }
          /> 
          <Input
            inputContainerStyle={ styles.inputContainerStyle }
            placeholder=' Last Name'
            onChangeText={this.setInputState('l_name')}
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
              }
          />
          <Input
            inputContainerStyle={ styles.inputContainerStyle }
            placeholder=' Cell...'
            onChangeText={this.setInputState('emerg_cell')}
            keyboardType='number-pad'
            leftIcon={
              <Icon
                name='phone'
                size={24}
                color='black'
              />
            }
          />
          <Input
            inputContainerStyle={ styles.inputContainerStyle }
            placeholder=' Email@email.com'
            onChangeText={this.setInputState('email')}
            keyboardType='email-address'
            leftIcon={
            <Icon
              name='envelope'
              size={24}
              color='black'
            />
            }
          />
          <Button 
              buttonStyle={ styles.buttonStyle }
              title='Confirm'
              onPress={() => this.handleSubmit()}
          />
        </View>
      </ImageBackground>
    </View>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    emergCon: state.emergCon,
    err: state.err
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createEmerg,
    readEmerg,
    getOneEmerg
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEmerg)