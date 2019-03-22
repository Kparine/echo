import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage:  {
    width: '100%', 
    height: '100%', 
    flex: 1
  },
  pageContainer:  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxContainer: {
    alignItems: 'center',
    top: 30,
    padding: 50
  },
  profileForm: {
    color: '#000000',
    flexWrap: 'wrap'
},
  buttonStyle: {
      backgroundColor: '#000',
      borderRadius: 20,
      opacity: 0.7,
      padding: 10
  }
})

export default styles