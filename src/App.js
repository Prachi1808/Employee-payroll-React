import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './components/dashboard/Dashboard'
import Add from './components/payroll-form/Payroll-form'

function App() {
  return (
    <div className="App">
      <h1></h1>
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<Add />} />
           
         
                   </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;