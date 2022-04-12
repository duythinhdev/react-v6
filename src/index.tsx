import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Exprenses from '../src/page/exprenses';
import Invoices from '../src/page/invoices';
import NotFound from '../src/page/Notfound';
import Invoice from '../src/page/Invoice';
import NewInvoice from '../src/page/NewInvoice';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/home" element={<App />} >
          <Route path="expense" element={<Exprenses />} >
          </Route>
          <Route path="invoices" element={<Invoices />} >
              <Route index  element={<h2 style={{ padding: '1rem'}}>Please select an Invoice</h2>}   />
              <Route path=":invoicesId" element={<Invoice />}   />
              <Route path="new" element={<NewInvoice />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
