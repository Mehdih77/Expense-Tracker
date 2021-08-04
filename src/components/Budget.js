import React from 'react'
import {useAuthState} from '../Context/AuthContext';

function Budget() {

    const {transaction} = useAuthState();

    const amounts = transaction.map(transaction => transaction.amount);

    const incomeBudget = amounts.filter(item => item > 0)
    .reduce((acc,curr) => acc += Number(curr) , 0);

    const expenceBudget = amounts.filter(item => item < 0)
    .reduce((acc,curr) => acc += Number(curr) * -1 , 0)

    const balanceBudget = incomeBudget - expenceBudget;

    return (
        <div className='container mt-1'>
            <div className="row budget my-4">
            <div className='col-11 col-md-3 mb-2 balance'>
                <p>Balance</p>
                <p className='budget-amount'>${balanceBudget}</p>
            </div>
            <div className='col-5 col-md-3 mb-2 income'>
                <p>Income</p>
                <p className='budget-amount'>${incomeBudget}</p>
            </div>
            <div className='col-5 col-md-3 mb-2 expence'>
                <p>Expence</p>
                <p className='budget-amount'>${expenceBudget}</p>
            </div>
            </div>
        </div>
    )
}

export default Budget
