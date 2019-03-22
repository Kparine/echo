const initState = {
  notes: null,
  err: null
}

const createTrip = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TRIP_SUCCESS': 
      console.log('Created New Trip')
      return {
        ...state,
        ...action.payload,
        err: null
        }
    case 'CREATE_TRIP_ERROR':
      console.log('Create Trip Error', err)
      return {
        ...state,
        err: 'Error Creating Trip'
      }
    case 'READ_TRIP_SUCCESS':
      console.log('Read Trip Success')
      return {
        ...state,
        ...action.payload,
        err: null
      }
    case 'READ_TRIP_ERROR':
      console.log('Cannot Read Trip')
      return {
        ...state,
        err: 'Error Creating Trip'
    }
    case 'CHECKIN_SUCCESS':
      console.log('Checked In Safely')
      return {
        notes: null,
        err: null
      }
    case 'CHECKIN_ERROR':
      console.log('You have not created a trip')
      return {
        ...state,
        err: 'You have not created a trip'
      }
    default: 
      return state
  }  
}
export default createTrip




