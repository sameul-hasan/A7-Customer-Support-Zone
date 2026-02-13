import React from 'react';
import CustomerTickets from '../CustomerTickets/CustomerTickets';
import Tasks from '../Tasks/Tasks';
const Main = () => {
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 mt-4'>
        <div className='col-span-2'>
            <CustomerTickets></CustomerTickets>
            
        </div>
        <div>
            <Tasks></Tasks>
        </div>
        </div>
    );
};

export default Main;