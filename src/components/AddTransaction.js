import React, { useState, useContext } from 'react'
import GlobalState, { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000000000),
            desc,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3 className="add">Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" placeholder="Transaction details" id="description" value={desc} onChange={(e) => setDesc(e.target.value) } />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Transaction Amount
                    </label>
                    <input type="number" placeholder="Enter amount" id="amount" value={amount} onChange={(e) => setAmount(e.target.value) } />
                </div>
                <button className="add-button">Add Transaction</button>
            </form>
        </div>
    )
}
