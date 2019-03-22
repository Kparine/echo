const initState = {
  users: [],
  err: null
}

const EditPro = (state = initState, action) => {
  
  switch(action.type) {
    case 'CREATE_PROFILE_SUCCESS':
    console.log('Created Profile Successfully')
      return {
        ...state,
        users: action.payload, 
        err: null
      }
    case 'CREATE_PROFILE_ERROR':
    console.log('Create Profile Error')
      return {
        ...state,
        err: 'Create Profile Error'
      }
    case 'READ_PROFILE_SUCCESS':
    console.log('Read Profile Successfully')
      return {
        ...state,
        users: action.payload, 
        err: null
      }
    case 'READ_PROFILE_ERROR':
      console.log('Document Not Found')
      return {
        ...state,
        err: 'Document Does Not Exist'
      }  
    default: 
      return state
  }
}

export default EditPro