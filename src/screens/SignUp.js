import { Text, View, Image, TextInput, ImageBackground, ScrollView } from 'react-native'
import { Input, Button, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather'
import styles from '../styles/signupStyle'
import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import { signUp } from '../actions/auth'
import { connect } from 'react-redux'
import { Fonts } from '../utils/Fonts'
import { Font } from 'expo'

class SignUp extends Component {
   constructor(props) {
    super(props);

    this.state = {
     f_name: '',
     l_name: '',
     email: '',
     password: '',
     confirmPassword: '',
     fontLoaded: false
    }
  }
  
  async componentDidMount() {
    await Font.loadAsync({ 'MajorMono': require('../assets/fonts/MajorMonoDisplay-Regular.ttf')})
   

    this.setState({fontLoaded: true})  
}

  handleSubmit = () => {  
  const { navigate } = this.props.navigation
  const {password, confirmPassword } = this.state

    if (password !== confirmPassword){
      alert("Passwords Must Match")
    } else if (confirmPassword.length < 6){
      alert('Passwords Must Be More Than 6 characters')
    } else {
  this.props.signUp(this.state, () => navigate('EditPro'))
  }
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
    const { navigate } = this.props.navigation
    return (
      <View style={ styles.container }>
        <ImageBackground source={require('../assets/images/Lost_2.jpg')} style={styles.backgroundImage}>
          <Header
            containerStyle={ styles.header }
            leftComponent={ 
            <Icon
              name='corner-left-up'
              size={20}
              color='#4286f4'
              onPress={()=> navigate('SignIn')}
            /> 
            }
          />
        <Text style={this.state.fontLoaded ? styles.h1 : null}>e c h o .</Text> 
        <View style={ styles.boxContainer}>
          <ScrollView>
            <Input
                inputContainerStyle={styles.inputContainerStyle}
                placeholder='  first name...'
                onChangeText={this.setInputState('f_name')}  
                value={this.state.f_name}
                leftIcon={
                  <Icon
                    name='user'
                    size={24}
                    color='black'
                    shake={true}
                  />
                }
              />
              <Input
                inputContainerStyle={styles.inputContainerStyle}
                placeholder='  last name...'
                onChangeText={this.setInputState('l_name')}  
                value={this.state.l_name}
                leftIcon={
                  <Icon
                    name='user'
                    size={24}
                    color='black'
                    shake={true}
                  />
                }
              />
              <Input
                inputContainerStyle={styles.inputContainerStyle}
                placeholder='  email'
                onChangeText={this.setInputState('email')}  
                value={this.state.email}
                keyboardType='email-address'
                leftIcon={
                  <Icon
                    name='mail'
                    size={24}
                    color='black'
                    shake={true}
                    marginRight={10}
                  />
                }
              />
              <Input
              inputContainerStyle={styles.inputContainerStyle}
                placeholder='  password...'
                onChangeText={this.setInputState('password')}  
                value={this.state.password}
                secureTextEntry={true}
                leftIcon={
                  <Icon
                    name='lock'
                    size={24}
                    color='black'
                    shake={true}
                    marginRight={10}
                  />
                }
              />
              <Input
              inputContainerStyle={styles.inputContainerStyle}
                placeholder='  password...'
                onChangeText={this.setInputState('confirmPassword')}  
                value={this.state.confirmPassword}
                secureTextEntry={true}
                leftIcon={
                  <Icon
                    name='lock'
                    size={24}
                    color='black'
                    shake={true}
                    marginRight={10}
                  />
                }
              />
            <View style={{justifyContent: 'center', margin: 60, borderRadius: 20 }}>
            <Button 
              buttonStyle={styles.buttonStyle}
              title='Sign Up  '
              onPress={() => this.handleSubmit()}
             />
          </View>
          </ScrollView>
        </View>
      </ImageBackground>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authErr: state.auth.authErr,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signUp
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp) 