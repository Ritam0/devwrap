import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Registration from './Components/Registration';
import Rules from './Components/Rules';
import Timeline from './Components/Timeline';
import About from './Components/About';
import Tracks from './Components/Tracks';
import Contact from './Components/Contact';
import Judges from './Components/Judges';
import LeaderBoard from './Components/LeaderBoard';
import Preloader from './Components/Preloader';
import VideoPreloader from './Components/VideoPreloader';
import Projects from './Components/Projects';
import Judge from './Components/Judge';
import RegistrationForm from './Components/Register';
import Prizes from './Components/Prizes';
import Template from './Components/Template';
import Result from './Components/result';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VideoPreloader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/timeline' element={<Timeline />} />
          <Route path='/about' element={<About />} />
          <Route path='/tracks' element={<Prizes />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/judges' element={<Judge />} />
          <Route path='/projects' element={<Template />} />
          <Route path='/leaderboard' element={<LeaderBoard />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
