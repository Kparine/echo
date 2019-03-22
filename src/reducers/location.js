const initState = {
  region: [],
  err: null
}

const pinLocation = (state = initState, action) => {
  switch (action.type) {
    case 'PIN_LOCATION': 
      console.log('Location Has Been Saved', action.trip)
      return {
        ...state,
        region: action.payload,
        err: null
      }
    case 'PIN_ERROR': 
      console.log('Location Error', action.err)
      return {
        ...state,
        err: 'Error setting pin location'
      }
    case 'REMOVE_LOCATION_SUCCESS':
      console.log('Remove Location Data Success')
      return {
        ...state,
        region: action.payload,
        err: null
      }
    case 'REMOVE_LOCATION_ERROR':
      console.log('Remove Location Data Error')
      return {
        ...state,
        err: 'Remove Location Data Error'
      }
    default: 
      return state
  }
  
}
export default pinLocation