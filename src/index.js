import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from 'react-dom';
// const root = createRoot(document.getElementById('root'));
// root.render(
//     <AuthProvider>
//         <App />
//     </AuthProvider>
// );

const root = document.getElementById('root'); // <- This is the correct method call for React version 17
render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root
);

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);

// reportWebVitals();
