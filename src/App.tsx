
import './App.css';
import NavBar from './components/nav-bar/nav-bar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
