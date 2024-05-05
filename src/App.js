import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Living from './components/Living';
import Kitchen from './components/Kitchen';
import Outdoor from './components/Outdoor';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/living'  element={<Living/>}/>
        <Route path='/kitchen'  element={<Kitchen/>}/>
        <Route path='/outdoor'  element={<Outdoor/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        {/* <Route path='/submit' element={<Submit/>}/> */}
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
