export const createTrip = (trip, cb) => {
  return (dispatch, getState, {getFirestore, getFirebase}) => {
    
    const firebase = getFirebase()
    const firestore = getFirestore()
    const db = firebase.firestore()
  
  const newTrip = {
        ...trip,
        createdAt: new Date(),
        createdBy: firebase.auth().currentUser.uid
  }
    
 firestore.collection('users').doc(firebase.auth().currentUser.uid)
    .update({
      trip: firebase.firestore.FieldValue.arrayUnion(newTrip)
    })
    .then((payload)=> {
      console.log('New!!!!', newTrip);
      
      dispatch({type: 'CREATE_TRIP_SUCCESS', payload: newTrip})
      cb()
    })
    .catch((err) => {
      console.log(err)
      dispatch({type: 'CREATE_TRIP_ERROR', err}) 
    })
  }
}

export const pinLocation = (region, cb) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    
    const firebase = getFirebase()
    const firestore = getFirestore()
    const db = firebase.firestore()

    firestore.collection('users').doc(firebase.auth().currentUser.uid)
    .update({location: firebase.firestore.FieldValue.arrayUnion({      
      ...region,
      createdAt: new Date()
    })
  })
    .then((payload)=> {
      dispatch({type: 'PIN_LOCATION', payload})
      cb()
    })
    .catch((err)=> {
      console.log(err)
      dispatch({type: 'PIN_ERROR', err})
    })
  }
}

export const getTrip = (tripId, cb) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    
    const firebase = getFirebase()
    const firestore = getFirestore()
    const db = firebase.firestore()
    const userId = firebase.auth().currentUser.uid

    let tripRef = db.collection('users').doc(userId)

    return tripRef.get()

    .then((doc) => {      
       dispatch({type: 'READ_TRIP_SUCCESS', payload: doc.data().trip[0]})
    })
    .catch((err) => {
      console.log(err)
      dispatch({type: 'READ_TRIP_ERROR', err})
    })
  }
}

export const checkIn = () => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
      
      const firebase = getFirebase()
      const firestore = getFirestore()
      const db = firebase.firestore()
      const userId = firebase.auth().currentUser.uid

      const tripRef = db.collection('users').doc(userId)

      const removeTrip = tripRef.update({
      trip: firebase.firestore.FieldValue.delete()
      })

    .then((doc)=> {
      dispatch({type: 'CHECKIN_SUCCESS' })
    })
    .catch((err)=> {
      console.log(err)
      dispatch({type: 'CHECKIN_ERROR', err})
    })       
  }
}

export const delLocation = () => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
      
      const firebase = getFirebase()
      const firestore = getFirestore()
      const db = firebase.firestore()
      const userId = firebase.auth().currentUser.uid

      const tripRef = db.collection('users').doc(userId)

      const removeTrip = tripRef.update({
      location: firebase.firestore.FieldValue.delete()
      })

    .then((doc)=> {
      console.log(doc.data().emergContacts)

      dispatch({type: 'REMOVE_LOCATION_SUCCESS', payload: doc.data().location })
    })
    .catch((err)=> {
      console.log(err)
      dispatch({type: 'REMOVE_LOCATION_ERROR', err})
    })       
  }
}
