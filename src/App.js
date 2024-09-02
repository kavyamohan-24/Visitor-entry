import logo from './logo.svg';
import './App.css';
import AddVisitors from './components/AddVisitors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddVisitors/>}/>
    <Route path="/view" element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
