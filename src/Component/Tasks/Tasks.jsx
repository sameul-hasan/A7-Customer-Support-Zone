import React from 'react';

const Tasks = () => {
    return (
        <div className= 'max-sm:mt-8'>
            <div className='mb-6'>
                <h1 className='text-2xl font-bold text-gray-800'>Task Status</h1>
                <p className='text-gray-500'>Select a ticket to add to Task Status</p>
                {
                    <div className='mt-4 p-3 bg-white rounded-lg shadow-md'>
                        <h2 className='text-lg font-semibold mb-2'>tilte</h2>
                        <button className='btn w-full bg-green-600 text-white px-3 py-1 rounded-md'>Complite</button>
                    </div>
                }
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl font-bold text-gray-800'>Resolved Task</h1>
                <p className='text-gray-500'>No resolved tasks yet.</p>
                {
                    <div className='mt-4 bg-blue-100 shadow-md'>
                        <h2 className='text-lg font-semibold text-blue-800 p-3'>tilte</h2>
                    </div>
                }
            </div>
        </div>
    );
};

export default Tasks;