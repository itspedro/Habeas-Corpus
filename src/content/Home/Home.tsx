import "./home.css";
import useDocumentTitle from '@/hooks/useDocumentTitle';
import HomeInfo from './home-info';
import RecentUsers from './Recents';

function Home() {
  
  useDocumentTitle({ title: 'HC - Visão geral' })
  return (
    <div>
      <div
        className="home_container_header"
      >
        <h1>Visão geral</h1>
      </div>
      <HomeInfo />
      <RecentUsers />
    </div>
  )
}

export default Home;