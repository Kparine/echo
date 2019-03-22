import { ListItem, Input, Button, Avatar, Text } from 'react-native-elements'
import { View, Image, ImageBackground, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderComp from '../components/Header'
import styles from '../styles/profileStyle'
import { readPro } from '../actions/profile'
import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux' 

class Profile extends React.Component {
 constructor(props) {
    super(props)
}

render(){
  const {navigate} = this.props.navigation
  return (
    <View style={ styles.pageContainer }>
      <ImageBackground source={require('../assets/images/Lost_2.jpg')} style={styles.backgroundImage}>
         <HeaderComp navigation={this.props.navigation}/>
        <View style={ styles.boxContainer }>
            <Avatar
              rounded
              size={225}
              title={this.props.auth.initial}
              avatarStyle={{backgroundColor: '#000'}}
              containerStyle={{opacity: 0.7}}
            />
          </View>
          <View style={{margin: 10, top: 40}}>
              <Button 
            buttonStyle={styles.buttonStyle}
            title='  E d i t  P r o f i l e'
            onPress={ () => navigate('EditPro')}
            icon={
              <Icon
                name='cogs'
                size={20}
                color='#4286f4'
                paddingRight={15}
              />
            }
            iconLeft
            />
            </View>
          <View style={{margin: 10, top: 40}}>
            <Button 
            buttonStyle={styles.buttonStyle}
            title='  E m e r g e n c y  C o n t a c t s'
            onPress={ () => navigate('Emerg')}
            icon={
              <Icon
                name='group'
                size={20}
                color='#4286f4'
                paddingRight={15}
              />
            }
            iconLeft
            />
          </View>
      </ImageBackground>
    </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  readPro
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)