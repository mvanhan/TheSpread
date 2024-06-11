import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Betting from './pages/Betting';
import NavBar from './components/NavBar';
import News from './pages/News';
import ScrollingText from './components/ScrollingText';

function App() {
  return (
    <>
        <Router> 
            <NavBar />
            <ScrollingText />
            <Routes>
                <Route path="/" element={<News />} />
                <Route path="/Betting" element={<Betting />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;