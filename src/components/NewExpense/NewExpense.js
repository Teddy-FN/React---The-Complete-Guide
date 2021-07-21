import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    console.log('INI PROPS =>',props)
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData)
        handlerCancel()
    }
    // ADD NEW EXPENSE
  let [newAddExpense, setNewAddExpense] = useState(false)
  
  const handlerNewExpense = () => {
      setNewAddExpense(true)
      console.log(true)
  }
  const handlerCancel = () => {
      setNewAddExpense(false)
  }
    return (
        <div className="new-expense">
        {
            !newAddExpense ? 
            <div className="new-expenses">
                <h1>{newAddExpense}</h1>
                <button type="submit" onClick={handlerNewExpense}>Add New Expense</button>
            </div> :
            <ExpenseForm 
                onSaveExpenseData={onSaveExpenseDataHandler} 
                handlerCancelBtn={handlerCancel}    
            />
        }
        </div>
    )
}

export default NewExpense
