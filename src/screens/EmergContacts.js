import { ListItem, Input, Button, Avatar, Text, Badge } from 'react-native-elements'
import { getAllContacts, removeContact } from '../actions/emergCon' 
import { View, Image, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderComp from '../components/Header'
import styles from '../styles/emergContactsStyle'
import { bindActionCreators } from 'redux'
import React, {Component} from 'react'
import {connect} from 'react-redux'

class EmergCon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emergContacts: {
        initial: ''
      }
    }
  } 

  handleDelete = () => {      
    const { emergContacts } = this.state
    this.props.removeContact(this.state)
  }

  componentDidMount() {  
     this.props.getAllContacts()
    }


  render(){
    const {navigate} = this.props.navigation
    console.log('howdy',this.props.emergContacts);
    
    return (
       <View style={ styles.pageContainer }>
        <ImageBackground source={require('../assets/images/Lost_2.jpg')} style={ styles.backgroundImage }>
          <HeaderComp navigation={this.props.navigation}/>
         <Button 
              buttonStyle={styles.buttonStyle}
              title='Add Emergency Contact '
              onPress={ () => navigate('EditEmerg', {})}
              icon={
                <Icon
                  name='address-card-o'
                  size={25}
                  color='#000'
                />
              }
              />
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
         <View style={styles.list}>
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
      </View>
        </ImageBackground>
      </View>   
    )
  }
}

const mapStateToProps = (state) => {
  return {
    emergContacts: state.emergCon.contacts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  getAllContacts,
  removeContact,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EmergCon)