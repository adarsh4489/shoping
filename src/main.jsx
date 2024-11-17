import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './Redux/Store'; // Make sure this path is correct
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { ToastContainer } from 'react-toastify';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
        <Provider store={store}>
        <App />
      <ToastContainer/>
      </Provider>
      
    </BrowserRouter>
  </StrictMode>
);
