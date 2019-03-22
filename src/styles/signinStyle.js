import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage:  {
    width: '100%', 
    height: '100%', 
    flex: 1
  },
  container:  {
    flex: 2,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center'
  },
  boxContainer: {
    top: 60,
    borderRadius: 20
    },
  buttonStyle: {
    backgroundColor: '#000000',
    borderRadius: 20,
    opacity: 0.7,
    padding: 15,
    margin: 20
  },
  inputContainerStyle:  { 
    height: 40, 
    width: '100%', 
    borderRadius: 20,  
    marginBottom: 20,
    backgroundColor: '#b2cfff',
    opacity: 0.8 
    },
    h1: {
    fontFamily: 'MajorMono',
    fontSize: 40,
    marginTop: 70,
    marginBottom: 40,
    left: 30
  },
})

export default styles