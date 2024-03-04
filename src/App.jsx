import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './routes/MainLayout';
import Home from './routes/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App
