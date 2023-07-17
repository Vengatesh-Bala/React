
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Test from './Componetnts/Test';
import { File, File2, } from './Componetnts/File.js';
import Test2 from './Componetnts/Uploader'

function App() {
  return (
    <div className="App">
        <Router>
          {/* this is a router pacakages thatpredefiend function */}
          <Routes>
          
            {/* <Route path='/' element={<Test2/>} /> */}
            <Route path='/' element={<Test/>} />
            {/* <Route path='/' element={<Test2/>} /> */}
            {/* / -- Landing page - That comes first */}

          </Routes>
        </Router> 
    </div>
  );
}

export default App;
