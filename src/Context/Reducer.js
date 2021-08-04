export const initialState = {
    transaction: []
};

export function reducer(state,action) {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                ...state,
                transaction: [action.payload, ...state.transaction]
            }
            case "REMOVE_TRANSACTION":
                return{
                    ...state,
                    transaction: state.transaction.filter(transaction => transaction.id !== action.payload)
                }
        default:
            return state;
    }
};