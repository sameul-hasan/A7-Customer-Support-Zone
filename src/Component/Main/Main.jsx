import React from 'react';
import { Suspense } from 'react';
import CustomerTickets from '../CustomerTickets/CustomerTickets';
import Tasks from '../Tasks/Tasks';

const TicketData = async () => {
    const res = await fetch('/TicketsData.json');
    return res.json();
}

const Main = () => {

    const ticketData = TicketData();

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-8  max-sm:m-4 mt-4'>
        <div className=' md:col-span-3'>
            <h1 className='text-2xl font-bold text-gray-800'>Customer Tickets</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <CustomerTickets ticketData={ticketData}></CustomerTickets>
            </Suspense>
            
        </div>
        <div>
            <Tasks></Tasks>
        </div>
        </div>
    );
};

export default Main;