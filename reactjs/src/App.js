import React, { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ category: '', amount: '' });


  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const addExpense = (event) => {
    event.preventDefault();
    if (!form.category || !form.amount) {
      alert("Both fields are required!");
      return;
    }
    setExpenses([...expenses, { ...form, id: Date.now() }]);
    setForm({ category: '', amount: '' }); // Reset form
  };



  const getTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + Number(expense.amount), 0);
  };

  return (
    <div className="App">
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <main>
        <form onSubmit={addExpense}>
          <select
            name="category"
            value={form.category}
            onChange={handleFormChange}
          >
            <option value="">Select Category</option>
            <option value="Shopping">Shopping</option>
            <option value="Food">Food</option>
            <option value="Gift">Gift</option>
            <option value="Electricity">Electricity</option>
            <option value="Health">Health</option>
            <option value="Hobbies">Hobbies</option>
          </select>
          <input
            id="aomunt"
            name="amount"
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={handleFormChange}
            min="0"
          />
          <button type="submit">Add Expense</button>
        </form>

        <section>
          <h2>Expenses</h2>
          <ul id="displayList">
            {expenses.map((expense) => (
              <li key={expense.id}>{`${expense.category}: $${expense.amount}`}</li>
            ))}
          </ul>

        </section>
        <section>
          <h2>Total Spent: ${getTotalExpenses()}</h2>
        </section>
      </main>
    </div>
  );
}

export default App;