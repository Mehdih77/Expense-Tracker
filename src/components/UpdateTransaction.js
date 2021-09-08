import { useEffect, useState } from "react";
import { useAuthDispatch, useAuthState } from "../Context/AuthContext"

export default function UpdateTransaction() {

    const dispatch = useAuthDispatch();
    const { currentTransaction } = useAuthState();

    const [newTransaction, setNewTransaction] = useState(currentTransaction);

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
        dispatch({
            type: "UPDATE_TRANSACTION",
            payload: {
                iddd: newTransaction.id,
                updatedTransaction: newTransaction,
            }
        })
    }

    return (
        <div className='container'>
            <div className="row addTransaction">
                <h3>Add Your Transaction</h3>
                <form onSubmit={handleUpdateTransaction} className='transaction-form'>
                    <input value={newTransaction.name} name='name' onChange={handleInputsChange} type="text" placeholder='Name Of Transaction...' />
                    <input value={newTransaction.amount} name='amount' onChange={handleInputsChange} type="number" placeholder='Amount Of Transaction...' />
                    <button >Update Transaction</button>
                    <button onClick={() => {}} >Cancel Transaction</button>
                </form>
            </div>
        </div>
    )
}
