import account from './account';

const reducer = (state, action) => {
    return {
        account: account(state, action),
    };
};

export default reducer;