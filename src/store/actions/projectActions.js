    //THUNK
export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to Database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;
    firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstname,
        authorLastName: profile.lastname,
        authorId: authorID,
        createdAt: new Date()
    }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err });
        })
   
    }
};


