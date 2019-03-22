import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:  {
    width: '100%', 
    height: '100%', 
    flex: 1,
  },
  h1Container:  {
    flex: 1,
    marginTop: 26,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    fontWeight: 'bold'
  },
  h1: {
    fontFamily: 'MajorMono',
    fontSize: 40,
    top: 70,
    left: 30
  },
  buttonStyle: {
    backgroundColor: '#000000',
    borderRadius: 20,
    opacity: 0.7,
    padding: 15,
    margin: 20
  },
  confirm: {
    backgroundColor: '#62c151',
    borderRadius: 20,
    opacity: 0.7,
    padding: 15,
    margin: 20
  }
})

export default styles