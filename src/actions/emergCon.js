export const createEmerg = (newContact, cb) => {
  return (dispatch, getState, {getFirestore, getFirebase}) => {
    
    const firebase = getFirebase()
    const db = firebase.firestore()
    const firestore = getFirestore()
    
    firestore.collection('users').doc(firebase.auth().currentUser.uid)
    .update({emergContacts: firebase.firestore.FieldValue.arrayUnion({
      ...newContact,
      createdAt: new Date(),
      createdBy: firebase.auth().currentUser.uid,
        f_name: newContact.f_name,
        l_name: newContact.l_name,
        initial: newContact.f_name[0] + newContact.l_name[0] 
      })
    })
    .then((payload)=> {
      dispatch({ type: 'CREATE_CONTACT_SUCCESS', payload: 'payload.id' })
      cb()
    })
    .catch((err) => {
      console.log(err)
      dispatch({type: 'CREATE_CONTACT_ERROR', err}) 
    })
  }
}

export const getAllContacts = () => {
  return (dispatch, getState, {getFirestore, getFirebase}) => {
    
    const firebase = getFirebase()
    const firestore = getFirestore()
    const db = firebase.firestore()
    const userId = firebase.auth().currentUser.uid

    let contactRef = db.collection('users').doc(userId)
      contactRef.get()

    .then((doc) => {
      console.log(doc.data().emergContacts)  
      dispatch({ type: 'READ_CONTACT_SUCCESS', payload: doc.data().emergContacts })      
    })
    .catch((err) => {
      console.log(err)
      dispatch({type: 'READ_CONTACT_ERROR', err})
    })
  }
}

export const removeContact = () => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
      
      const firebase = getFirebase()
      const firestore = getFirestore()
      const db = firebase.firestore()
      const userId = firebase.auth().currentUser.uid

      const contactRef = db.collection('users').doc(userId)

      const removeEmerg = contactRef.update({
      emergContacts: firebase.firestore.FieldValue.delete()
      })

    .then((doc)=> {
      console.log(doc.data().emergContacts)

      dispatch({type: 'REMOVE_CONTACT_SUCCESS', payload: doc.data().emergContacts })
    })
    .catch((err)=> {
      console.log(err)
      dispatch({type: 'REMOVE_CONTACT_ERROR', err})
    })       
  }
}