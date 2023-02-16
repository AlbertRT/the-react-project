import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './page/Blog';
import Contact from './page/Contact';
import Home from './page/Home';
import Profile from './page/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
