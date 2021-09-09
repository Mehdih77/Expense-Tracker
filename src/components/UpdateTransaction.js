import { useEffect, useState } from "react";
import { useAuthDispatch, useAuthState } from "../Context/AuthContext"

export default function UpdateTransaction() {

    const dispatch = useAuthDispatch();
    const { currentTransaction } = useAuthState();
    const [newTransaction, setNewTransaction] = useState(currentTransaction);
    const [error, setError] = useState(false);

    const cancelTransaction = (e) => {
        e.preventDefault();
        setNewTransaction(currentTransaction);
    }

    useEffect(() => {
        setNewTransaction(currentTransaction)
    }, [currentTransaction])

    const handleInputsChange = (e) => {
        setNewTransaction({
            ...newTransaction,
            [e.target.name] : e.target.value
        })
    }

    const handleUpdateTransaction = (e) => {
        e.preventDefault();
        if (!newTransaction.name || !newTransaction.amount) {
            setError(true);
            return;
        }
        dispatch({
            type: "UPDATE_TRANSACTION",
            payload: {
                iddd: newTransaction.id,
                updatedTransaction: newTransaction,
            }
        })
        setError(false);
    }

    return (
        <div className='container'>
            <div className="row editTransaction">
                <h3>Edit Your Transaction</h3>
                {error && <p className='error-txt'>Please Fill All The Fields <i className="fas fa-exclamation"></i></p>}
                <form onSubmit={handleUpdateTransaction} className='transaction-form'>
                    <input value={newTransaction.name} name='name' onChange={handleInputsChange} type="text" placeholder='Name Of Transaction...' />
                    <input value={newTransaction.amount} name='amount' onChange={handleInputsChange} type="number" placeholder='Amount Of Transaction...' />
                    <button >Update Transaction</button>
                    <button className='cancel-btn' onClick={cancelTransaction} >Cancel Transaction</button>
                </form>
            </div>
        </div>
    )
}
