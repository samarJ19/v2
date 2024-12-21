import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UploadPage from './Component/UploadPage';
import HomePage from './Component/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
