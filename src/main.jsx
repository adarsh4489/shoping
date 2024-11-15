import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // You are importing this correctly
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './Redux/Store'; // Make sure this path is correct

const root = createRoot(document.getElementById('root')); // Use createRoot properly
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
