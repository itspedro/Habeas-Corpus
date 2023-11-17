import useDocumentTitle from '@/hooks/useDocumentTitle';
import { Route, Routes } from 'react-router-dom';

function Home() {
  
  useDocumentTitle({ title: 'HC - Visão geral' })
  return (
  <Routes>
    <Route path="/" element={<div>Home</div>} />
    <Route path="*" element={<div>404</div>} />
  </Routes>
  )
}

export default Home;