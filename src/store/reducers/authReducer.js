const initState = {
    authError: null 
}

export const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log('User logged in')
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            console.log('User fail to log in')
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNOUT_SUCCESS':
            alert('User logged out');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Signup Success!');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Signup Error!');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
        
    }
}

export default authReducer