import Navbar from './Navbar/Navbar.js'
import Intro from './Intro/Intro.js'
import About from './About/About.js'
import Solutions from './Solutions/Solutions.js'
import Technologies from './Technologies/Technologies.js'
import Cases from './Cases/Cases.js'
import Team from './Team/Team.js'
import Talk from './Talk/Talk.js'
import Footer from './Footer/Footer.js'

function Home() {
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

export default Home;
