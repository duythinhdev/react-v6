import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import { Invoices } from '../data/invoices';

const invoices = () => {
    return (
        <main>
            <h2>invoices</h2>
            <div style={{ display: 'flex' }}>
                <div style={{ padding: '1rem',borderRight: '1px solid' }} >
                    {Invoices.map(res => {
                      return  <Link to={res.id.toString()} key={res.id} style={{display: 'block', margin: '1rem'}}>
                            {res.name}
                        </Link>
                    })}
                </div>
                <Outlet />
            </div>
        </main>
    );
}

export default invoices;