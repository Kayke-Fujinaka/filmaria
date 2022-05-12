import React from 'react';
import RoutesApp from './Routes/router';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <div className='App'>
        <ToastContainer autoClose={2500} />
        <RoutesApp />
      </div>
    </>
  );
}
