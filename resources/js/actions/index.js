export const accountAuth = (auth_token) => {
    return {
        type: 'FETCH_ACCOUNT_AUTH_SUCCESS',
        auth_token: auth_token,
    }
}
export const accountAuthError = (error) => {
    return {
        type: 'FETCH_ACCOUNT_AUTH_ERROR',
        error: error
    }
}