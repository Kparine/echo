import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage:  {
    width: '100%', 
    height: '100%', 
    flex: 1,
  },
  pageContainer:  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxContainer: {
    top: 50,
    borderColor: '#000000'  
  },
  list: {
    backgroundColor: '#000000',
    opacity: 0.8,
    marginTop: 50
  },
  buttonStyle: {
    backgroundColor: '#62c151',
    borderRadius: 20,
    opacity: 0.7,
    padding: 15,
    margin: 20
  }
})

export default styles