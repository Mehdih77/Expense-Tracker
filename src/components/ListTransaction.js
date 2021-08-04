import React from 'react';
import {useAuthDispatch, useAuthState} from '../Context/AuthContext';

function ListTransaction() {

    const {transaction} = useAuthState();
    const dispatch = useAuthDispatch();

    function handleRemove(id){
        dispatch({
            type: "REMOVE_TRANSACTION",
            payload: id
        })
    }

    const listOfTransaction = transaction.map(transaction => {
        return (
            <div key={transaction.id} 
            className={`col-10 offset-1 mb-3 transaction-item ${transaction.amount > 0 ? "plus-transaction" : "minus-transaction"}`}>
                <p>{transaction.name}</p>
                <p>{transaction.amount > 0 ? "+" : "-"}${Math.abs(transaction.amount)}
                <span><i onClick={() => handleRemove(transaction.id)} className="fas fa-trash"></i></span>
                </p>
            </div>
        )
    })

    return (
        <div className='container'>
            <div className="row listTransaction">
                <h3>History</h3>
                {listOfTransaction}
            </div>
        </div>
    )
}

export default ListTransaction
