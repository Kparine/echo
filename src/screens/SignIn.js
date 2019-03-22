import { Text, View, Image, TextInput, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Input, Button } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { signIn } from '../actions/auth'
import styles from '../styles/signinStyle'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Fonts } from '../utils/Fonts'
import { Font } from 'expo'

class SignIn extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
     email: '',
     password: '',
     fontLoaded: false

    }
  }

handleSubmit = () => {
  const { navigate } = this.props.navigation
  this.props.signIn(this.state, () => navigate('Dash'))
}

async componentDidMount() {
    await Font.loadAsync({ 'MajorMono': require('../assets/fonts/MajorMonoDisplay-Regular.ttf')})
    this.setState({fontLoaded: true})  
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
    const { authErr, auth } = this.props;
    const {navigate} = this.props.navigation
    return (
      <View style={ styles.container }>
        <ImageBackground source={require('../assets/images/Lost_2.jpg')} style={styles.backgroundImage}>
          
          <Text style={this.state.fontLoaded ? styles.h1 : null}>e c h o .</Text>

        <View style={ styles.boxContainer }>

          <Input
            value={this.state.email}
            inputContainerStyle={ styles.inputContainerStyle }
            placeholder='  email...'
            onChangeText={this.setInputState('email')}
            keyboardType='email-address'
            leftIcon={
              <Icon
                name='mail'
                size={24}
                color='black'
                shake={true}
              />
            }
          />
           <Input
            value={this.state.password}
            inputContainerStyle={ styles.inputContainerStyle }
            placeholder='  password...'
            onChangeText={this.setInputState('password')}
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
            buttonStyle={ styles.buttonStyle }
            title='Sign In'
            onPress={ () => this.handleSubmit()}
          />
          <Button 
            buttonStyle={ styles.buttonStyle }
            title='Sign Up'
            onPress={ () => navigate('SignUp')}
          />
          </View>
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
    signIn
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)