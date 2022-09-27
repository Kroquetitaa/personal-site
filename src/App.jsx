import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Aboutme from './components/Aboutme/Abouteme';
import Studies from './components/studies/Studies';
import Experiency from './components/experiency/Experiency';
import Skills from './components/Skills/Skills';

const App = () => {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/kroquetita" element={<Aboutme />}></Route>
          <Route path="/studies" element={<Studies />}></Route>
          <Route path="/experiency" element={<Experiency />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
