import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hello from './component/Hello';
import PhotoCrop from './component/PhotoCrop';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/photo" element={<PhotoCrop />} />
      </Routes>
    </Router>
  );
}
