import React, { useState } from 'react'
import {useAuthDispatch} from '../Context/AuthContext'

function AddTransaction() {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useAuthDispatch();


    function handleAddTransaction(e){
        e.preventDefault();
        if (!name || !amount) {
            return setError(true);
        } 
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                id: Math.floor(Math.random() * 100000000),
                name,
                amount,
            }
        });
        setName('');
        setAmount('');
        setError(false);
    }

    return (
        <div className='container'>
            <div className="row addTransaction">
                <h3>Add Your Transaction</h3>
                {error && <p className='error-txt'>Please Fill All The Fields <i className="fas fa-exclamation"></i></p>}
                <form onSubmit={handleAddTransaction} className='transaction-form'>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name Of Transaction...' />
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder='Amount Of Transaction...' />
                    <button type='submit'>Add Transaction</button>
                </form>
            </div>
        </div>
    )
}

export default AddTransaction
