const reducer = (state, action) => {
    if (state === undefined) {
        return {
            isAuth: false,
            auth_error: '',
            reg_error: '',
        }
    }
    console.log(action.type);
    switch(action.type) {
        case 'FETCH_ACCOUNT_AUTH_SUCCESS':
            return {
                ...state,
                isAuth: true,
            }
        case 'FETCH_ACCOUNT_AUTH_ERROR':
            return {
                ...state,
                isAuth: false,
                auth_error: action.error,
            }
        case 'FETCH_ACCOUNT_AUTH_LOGOUT':
            return {
                ...state,
                isAuth: false,
            }
        case 'FETCH_ACCOUNT_REG_SUCCESS':
            return {
                ...state,
                isAuth: true,
            }
        case 'FETCH_ACCOUNT_REG_ERROR':
            return {
                ...state,
                isAuth: true,
                reg_error: action.error,
            }
        default:
            return state;
    }
}
export default reducer