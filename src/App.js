import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import ProjectPage from './components/ProjectPage/ProjectPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/:projectId' element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
