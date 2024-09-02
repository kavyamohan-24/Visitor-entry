import logo from './logo.svg';
import './App.css';
import AddVisitors from './components/AddVisitors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddVisitors/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
