import React, { } from 'react';
import { Link } from 'react-router-dom';

const ErrorText = ({ text = 'Something went wrong...' }) => {

  return <>
    {/* <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"> */}
    <div className="flex flex-col items-center p-10">
      <p className="text-slate-900 dark:text-white text-lg">{text}</p>
      <Link to='/'>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-slate-50 dark:text-white rounded hover:bg-blue-600 flex"
        >
          <span>Back to home</span>

        </button>
      </Link>
    </div>
    {/* </div> */}
  </>
};

export default ErrorText;
