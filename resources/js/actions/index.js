export const accountAuth = () => {
    return {
        type: 'FETCH_ACCOUNT_AUTH_SUCCESS',
    }
}
export const accountAuthError = (error) => {
    return {
        type: 'FETCH_ACCOUNT_AUTH_ERROR',
        error: error
    }
}
export const accountAuthLogout = () => {
    return {
        type: 'FETCH_ACCOUNT_AUTH_LOGOUT',
    }
}