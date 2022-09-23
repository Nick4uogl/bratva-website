import './App.scss';
import Navbar from './components/Navbar.js'
import Intro from './components/Intro.js'
import About from './components/About.js'
import Solutions from './components/Solutions.js'
import Technologies from './components/Technologies.js'
import Cases from './components/Cases.js';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Solutions />
      <Technologies />
      <Cases />
    </div>
  );
}

export default App;
