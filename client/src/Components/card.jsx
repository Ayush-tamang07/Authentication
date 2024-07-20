import React from 'react';

function Card() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-64">
      <h1 className="text-2xl font-bold mb-2">Topic</h1>
      <p className="text-gray-700 mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sed in sapiente iusto sunt commodi ducimus obcaecati, accusamus nesciunt aspernatur, rem modi! Provident dolorem nam commodi natus esse quo mollitia?
      </p>
      <div className="flex space-x-2">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Edit
        </button>
        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
