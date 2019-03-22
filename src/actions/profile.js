export const createPro = (user, cb) => {
  return (dispatch, getState, {getFirestore, getFirebase}) => {
    
    const firebase = getFirebase()
    const firestore = getFirestore()
    const db = firebase.firestore()

    firestore.collection('users').doc(firebase.auth().currentUser.uid).set({
      ...user,
      createdAt: new Date()
    },{ 
      merge: true 
      })
    .then((payload)=> {
      dispatch({type: 'CREATE_PROFILE_SUCCESS', payload})
      cb()
    })
    .catch((err) => {
      console.log(err)
      dispatch({type: 'CREATE_PROFILE_ERROR', err}) 
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
      dispatch({type: 'READ_PROFILE_SUCCESS', payload: doc.data()})
    }).catch((err) => {
      console.log(err)
      dispatch({type: 'READ_PROFILE_ERROR', err})
    })
  }
}
