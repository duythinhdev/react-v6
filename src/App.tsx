import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link,Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>
        bookkeeper
      </h1>
      <nav style={{borderBottom: '1px solid', paddingBottom: '1rem'}} >
        <Link to="invoices">Invoices</Link>
        <Link to="expense">Expense</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
