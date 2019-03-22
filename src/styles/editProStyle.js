import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage:  {
    width: '100%', 
    height: '100%'
  },
  container:  {
    backgroundColor: '#fff',
    flex: 1
  },
  buttonStyle: {
    height: 50, 
    width: '95%', 
    borderRadius: 20,
    margin: 5,
    backgroundColor: '#b2cfff',
    opacity: 0.8,
    paddingLeft: 20,
    paddingRight: 5
  },
  btnStyle: {
    backgroundColor: '#62c151',
    opacity: 0.8,
    alignSelf: 'center',
    width: '95%', 
    borderRadius: 20,  
  },
  inputContainerStyle:  { 
    height: 50, 
    width: '100%', 
    borderRadius: 20,  
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: '#b2cfff',
    opacity: 0.8 
  },
  picker: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10,
    padding: 10
  }
})

export default styles