const initState = {
  initial: '',
  authErr: null
}

const auth = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      return {
        ...state, 
        authErr: 'Login Error'
      }
    case 'LOGIN_SUCCESS':
      console.log('Login Success')
      return {
        ...state,
        initial: action.payload,
        authErr: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('Signed Out Successfully')
      return {
        state
      }
    case 'SIGNUP_SUCCESS':
      console.log('Signup Success')
      return {
        ...state,
        ...action.payload,
        authErr: null
      }
    case 'SIGNUP_ERROR':
      console.log('Signup Error')
      return {
        ...state,
        authErr: auth.error.message
      }
    default: 
      return state      
  }
}

export default auth 