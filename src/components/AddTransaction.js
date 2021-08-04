import React, { useState} from 'react'
import {useAuthDispatch} from '../Context/AuthContext'

function AddTransaction() {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const dispatch = useAuthDispatch();

    function handleAddTransaction(e){
        e.preventDefault();
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                id: Math.floor(Math.random() * 100000000),
                name,
                amount,
            }
        });
    }


    return (
        <div className='container'>
            <div className="row addTransaction">
                <h3>Add Your Transaction</h3>
                <form onSubmit={handleAddTransaction} className='transaction-form'>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name Of Transaction...' />
                    <input onChange={(e) => setAmount(e.target.value)} type="number" placeholder='Amount Of Transaction...' />
                    <button type='submit'>Add Transaction</button>
                </form>
            </div>
        </div>
    )
}

export default AddTransaction
