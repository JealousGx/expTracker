import React, { useContext } from 'react'
import GlobalState, { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <li className={transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.desc} 
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete" onClick={() => deleteTransaction(transaction.id)}>X</button>
        </li>
    )
}
