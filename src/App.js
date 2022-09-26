import './App.scss';
import Navbar from './components/Navbar/Navbar.js'
import Intro from './components/Intro/Intro.js'
import About from './components/About/About.js'
import Solutions from './components/Solutions/Solutions.js'
import Technologies from './components/Technologies/Technologies.js'
import Cases from './components/Cases/Cases.js'
import Team from './components/Team/Team.js'
import Talk from './components/Talk/Talk.js'
import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Solutions />
      <Technologies />
      <Cases />
      <Team />
      <Talk />
      <Footer />
    </div>
  );
}

export default App;
