import React, { useContext } from 'react'
import GlobalState, { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const History = () => {

    const { transactions } = useContext(GlobalContext);
    console.log(transactions)

    return (
        <div>
            <h3  className="history">Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}
