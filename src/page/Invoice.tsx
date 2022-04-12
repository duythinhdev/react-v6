import React from 'react';
import {useParams} from "react-router-dom";
import { Invoices } from "../data/invoices";

const  Invoice = () => {
    const params = useParams<{invoicesId: string}>();

    const invoice = Invoices.find(invoice => invoice.id.toString() === params.invoicesId);
    console.log("invoice",invoice);
    return (
        <h2 style={{padding: '1rem'}}>
            {
                invoice ? `Invoice ${invoice?.id} for ${invoice?.name}`: `No Invoice found`
            }
        </h2>
    );
}

export default Invoice;