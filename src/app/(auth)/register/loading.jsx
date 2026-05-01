import React from 'react';

const RegistredDataLoading = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
      {[1, 2, 3].map((n) => (
        <div key={n} className="flex flex-col gap-4 w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="skeleton h-48 w-full rounded-xl bg-gray-200"></div>
          <div className="skeleton h-6 w-28 bg-gray-200"></div>
          <div className="skeleton h-4 w-full bg-gray-200"></div>
          <div className="skeleton h-4 w-full bg-gray-200"></div>
          <div className="flex justify-between items-center mt-2">
            <div className="skeleton h-10 w-24 bg-gray-200"></div>
            <div className="skeleton h-10 w-24 bg-gray-200"></div>
          </div>
        </div>
      ))}
    </div>
    );
};

export default RegistredDataLoading;