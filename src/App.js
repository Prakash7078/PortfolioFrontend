import Content from './components/Content';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Contact from './components/Contact';
function App() {
  return (
    <BrowserRouter>
    <div className="App">  
      <main>
      <Routes>
        <Route path='/' element={<Content/>}></Route>
        <Route path='/education' element={<Education/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/hobbies' element={<Hobbies/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/internships' element={<Internships/>}></Route>
      </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
