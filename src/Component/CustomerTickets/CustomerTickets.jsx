import React, { use } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {  faCalendar} from "@fortawesome/free-regular-svg-icons";
const CustomerTickets = ({ ticketData }) => {
    const data = use(ticketData);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
            
                {data.map((ticket) => (
                    <div key={ticket.id} className=' p-3 bg-white rounded-lg shadow-md'>
                       <div className='flex items-center justify-between mb-2 '>
                            <h2 className='text-lg text-gray-800 font-semibold mb-2'>{ticket.title}</h2>
                            <span className={`text-sm font-medium p-1.5 rounded-xl  ${ticket.status === 'Open' ? 'bg-green-100' : 'bg-yellow-100'} ${ticket.status === 'Open' ? 'text-green-500' : 'text-yellow-500'}`} ><FontAwesomeIcon className = "mr-1" icon={faCircle} />{ticket.status}</span>
                       </div>
                       <p className='text-gray-400 text-sm font-medium'> {ticket.description} </p>
                       <div className='flex mt-4 items-center justify-between text-sm text-gray-400'>
                            <div className='flex items-center gap-3'>
                                <p>#{ticket.id}</p>
                                <p className={` ${ticket.priority === 'HIGH PRIORITY' ? 'text-red-500' : ticket.priority === 'MEDIUM PRIORITY' ? 'text-yellow-500' : 'text-green-500'}`}>{ticket.priority}</p>
                            </div>
                            <div className='flex items-center gap-3 '>
                                <p className='font-medium'>{ticket.customer}</p>
                                <p><FontAwesomeIcon className = "mr-0.5" icon={faCalendar} />{ticket.createdAt}</p>
                            </div>
                       </div>
                    </div>
                ))}
        </div>
    );
};

export default CustomerTickets;