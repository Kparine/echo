import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
    bottom: 0,
    height: 667,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    zIndex: -1
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%'
  },
  marker: {
    height: 48,
    width: 48
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    position: 'absolute',
    width: '100%'
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20
  },
   buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#62c151',
    borderRadius: 20,
    opacity: 0.5,
    padding: 15,
    margin: 5,
    paddingTop: 20, 
    zIndex: 1
  }
 })

export default styles