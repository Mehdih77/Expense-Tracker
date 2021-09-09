export const initialState = {
    transaction: [],
    editing: false,
    currentTransaction: {
        id: null,
        name: "",
        amount: ""
    }
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
                    transaction: state.transaction.filter(transaction => transaction.id !== action.payload),
                    editing: false
                }
        case "UPDATE_TRANSACTION":
                const {iddd, updatedTransaction} = action.payload;
                return {
                    ...state,
                    transaction: state.transaction.map(trans => (
                        trans.id === iddd ? updatedTransaction : trans
                        )),
                    editing: false,
                }    
        case "EDITROW_TRANSACTION":
                const {id, name, amount} = action.payload;
                return {
                   ...state,
                   editing: true,
                   currentTransaction: {
                       id,
                       name,
                       amount
                   }
                }    
        default:
            return state;
    }
};