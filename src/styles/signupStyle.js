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
      alignItems: 'center',
      justifyContent: 'center'
  },
    boxContainer: {
      paddingTop: 60,
      borderRadius: 20
  },
    buttonStyle: {
      backgroundColor: '#000',
      opacity: 0.8,
      borderRadius: 20
  },
    h1: {
      fontFamily: 'MajorMono',
      fontSize: 40,
      top: 30,
      left: 30
  },
    inputContainerStyle:  { 
      height: 40, 
      width: '100%', 
      borderRadius: 20,  
      marginBottom: 30,
      backgroundColor: '#b2cfff',
      opacity: 0.8 
    },
    header: {
      backgroundColor: '#000',
      opacity: 0.6,
      width: '100%'
    }  
})

export default styles