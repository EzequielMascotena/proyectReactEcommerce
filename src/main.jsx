import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyCidXbt5qy6FNkn7aLVjakcvAf-EMerXhA",
  authDomain: "ecommerce-react-a9f05.firebaseapp.com",
  projectId: "ecommerce-react-a9f05",
  storageBucket: "ecommerce-react-a9f05.appspot.com",
  messagingSenderId: "512797031583",
  appId: "1:512797031583:web:8dfeaa408e0f800a1df6aa"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
