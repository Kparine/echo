

export const signIn = (credentials, cb) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()
  
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((payload)=> {
      dispatch(readPro())
      cb()
    }).catch((err)=> {
      console.log('login error', err)
      dispatch({type: 'LOGIN_ERROR'})
    })
  }
}

export const signOut = (cb) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()

    firebase.auth().signOut()
    .then(() =>{
      dispatch({type: 'SIGNOUT_SUCCESS'})
      cb()
    })
  }
}

export const signUp = (newUser, cb) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
      ).then((data)=> {
        
       return firestore.collection('users').doc(data.user.uid).set({
         f_name: newUser.f_name,
         l_name: newUser.l_name,
         initial: newUser.f_name[0] + newUser.l_name[0]
       })
      }).then((payload)=> {
        console.log(payload);
        
      dispatch({type: 'SIGNUP_SUCCESS', payload})
      cb()
    }).catch((err)=> {
      console.log(err)
      dispatch({type: 'SIGNUP_ERROR', err})
    })
    }
  }

export const readPro = () => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    
    const firebase = getFirebase()
    const firestore = getFirestore()
    const db = firebase.firestore()
    const userId = firebase.auth().currentUser.uid

    let proRef = firestore.collection('users').doc(userId)
    proRef.get()

    .then((doc) => {            
      dispatch({type: 'LOGIN_SUCCESS', payload: doc.data().initial})
    }).catch((err) => {
      console.log(err)
      dispatch({type: 'LOGIN_ERROR', err})
    })
  }
}