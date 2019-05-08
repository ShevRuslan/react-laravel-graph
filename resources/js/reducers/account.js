const reducer = (state, action) => {
    if (state === undefined) {
        return {
            isAuth: false,
            auth_token: '',
            auth_error: '',
        }
    }
    console.log(action.type);
    switch(action.type) {
        case 'FETCH_ACCOUNT_AUTH_SUCCESS':
            return {
                isAuth: true,
                auth_token: action.auth_token,
                auth_error: '',
            }
        case 'FETCH_ACCOUNT_AUTH_ERROR':
            return {
                isAuth: false,
                auth_token: '',
                auth_error: action.error,
            }
        default:
            return state;
    }
}
export default reducer