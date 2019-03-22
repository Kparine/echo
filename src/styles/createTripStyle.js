import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage:  {
    width: '100%', 
    height: '100%', 
    flex: 1
  },
  boxContainer: {
    margin: 10,
    paddingTop: 10
  },
  profileForm: {
    color: '#000000',
    flexWrap: 'wrap'
},
  confirmStyle:{
    backgroundColor: '#62c151',
    borderRadius: 20,
    opacity: 0.7,
    width: '70%',
    margin: 15
},
  buttonStyle: {
    backgroundColor: '#62c151',
    borderRadius: 20,
    opacity: 0.7,
    padding: 15,
    margin: 15
  },
  btnStyle: {
    backgroundColor: '#4286f4',
    borderRadius: 20,
    opacity: 0.7,
    padding: 15,
    margin: 15
  },
  list: {
    backgroundColor: '#000000',
    opacity: 0.8,
    position: 'absolute', 
    left: 0, 
    right: 0, 
    bottom: 0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  inputContainerStyle: {
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 10,
    height: 60
  }
})

export default styles