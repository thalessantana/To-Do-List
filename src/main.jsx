import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDo from './components/TasksApp'
import MyGlobalStyles from './styles/globalStyles'
// import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyGlobalStyles />
    <ToDo />
  </React.StrictMode>,
)
