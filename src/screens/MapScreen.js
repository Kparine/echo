import { View, SafeAreaView, Image, Text, Button, Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { firestoreConnect } from 'react-redux-firebase'
import marker from '../assets/images/icon2.png'
import styles from '../styles/mapScreenStyle'
import { Location, Permissions } from 'expo'
import { pinLocation } from '../actions/trip'
import { Icon } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import React from 'react'

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.18
const LONGIITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


class MapScreen extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
    errorMessage: '',
    region: {
      latitude: 47.6,
      longitude: -127.6,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGIITUDE_DELTA
      }
    }
  }
  
  componentWillMount() {
    this.getLocationAsync()
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      })
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      }
    })
  }

  getDifferenceWithThreshold(a, b, threshold){
    return Math.abs(a - b) > threshold
  }

  onRegionChange = async region => {

    if (this.getDifferenceWithThreshold(this.state.region.latitude, region.latitude, 0.001) &&
        this.getDifferenceWithThreshold(this.state.region.longitude, region.longitude, 0.001)) {
      
      this.setState({
        region
    })
  }    
}

handleSubmit = () => {  
  const { navigate } = this.props.navigation
  this.props.pinLocation(this.state, () => navigate('Trip'))
}


  render() {
    const { navigate } = this.props.navigation
    const { region } = this.state

    return (
  <View>
    <View style={{flex: 1, flexDirection: 'row', marginTop: 30}}>
      <Icon
        raised
        name='x'
        type='feather'
        color='#fc6a6a'
        reverse={ true }
        onPress={() => navigate('Trip')} 
      />
      <Icon 
        raise 
        name='navigation'
        type='feather'
        color='#4286f4'
        reverse={ true }
        onPress={() => this.getLocationAsync()} 
      />
      <Icon
        raised
        name='check'
        type='feather'
        color='#62c151'
        reverse={ true }
        onPress={() => this.handleSubmit()} 
      />
    </View>
  <View style={ styles.container }>
    <MapView ref="map" 
      mapType="hybrid"
      provider={PROVIDER_GOOGLE} 
      style={styles.map}
      region={ region }
      onRegionChangeComplete={ this.onRegionChange }
    />
      <View style={styles.markerFixed}>
        <Image style={styles.marker} source={marker} />
      </View>
    </View>
  </View>
  )
  }
}


 const mapStateToProps = (state) => {
  return{
    region: state.region,
    trip: state.trip,
    err: state.err
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    pinLocation
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)