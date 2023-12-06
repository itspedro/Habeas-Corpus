import useDocumentTitle from '@/hooks/useDocumentTitle';
import HomeInfo from './home-info';
import RecentUsers from './Recents';

function Home() {
  
  useDocumentTitle({ title: 'HC - Visão geral' })
  return (
    <div>
      <h1>Visão geral</h1>
      <HomeInfo />
      <RecentUsers />
    </div>
  )
}

export default Home;