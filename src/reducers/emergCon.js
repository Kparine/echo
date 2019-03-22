const initState = {
  contacts: [],
  err: null
}

const emergCon = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_CONTACT_SUCCESS': 
      console.log('created emergency contact')
      return {
        ...state,
        err: 'Emergency Contact Created Successfully'
      }
    case 'CREATE_CONTACT_ERROR':
      console.log('create project error')
      return {
        ...state,
        err: 'Create Emergency Contact Error'
      }
    case 'READ_CONTACT_SUCCESS':
      console.log('Found Emergency Contacts')
      return {
        ...state,
        contacts: action.payload,
        err: null
      }
    case 'READ_CONTACT_ERROR':
      console.log('Could Not Find Emergency Contacts')
      return {
        ...state,
        err: 'Could Not Find Emergency Contacts'
      }
    case 'REMOVE_CONTACT_SUCCESS':
      console.log('Contact Successfully Removed')
      return {
        ...state,
        contacts: action.payload,
        err: null
      }
    case 'REMOVE_CONTACT_ERROR':
      console.log('Contact Could Not Be Removed')
      return {
        ...state,
        err: 'Could Not Remove Contact'
      }
     default: 
      return state
  }  
}

export default emergCon 

