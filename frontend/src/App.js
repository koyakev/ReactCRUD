import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing.js';
import Edit from './Edit.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path='edit/:id' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}