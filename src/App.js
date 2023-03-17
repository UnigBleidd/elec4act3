import logo from './logo.svg';
import './App.css';
import Expense from './components/Expense';
import expenses from './data';

function App() {
  const total = expenses.reduce((total, expense) => {return total + expense.price}, 0);
  return (
    <div className="App">
      <div>
        <h1>Expense Tracker</h1>
      </div>
      {expenses.map((expense) => {
        return (
          <Expense key={expense.id} name={expense.name} price={expense.price} />
        );
      })}
      <div>
        <b>TOTAL: </b>
        {total}
      </div>
    </div>
  );
}

export default App;
