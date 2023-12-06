import './App.css';
import NavBar from './components/nav-bar/nav-bar';
import { Outlet } from 'react-router-dom';
import TopBar from './components/top-bar/top-bar';


function App() {

  return (
    <>
      <NavBar />
      <main>
        <TopBar />
        <Outlet />
      </main>
    </>
  );
}

export default App;
