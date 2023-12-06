import { ActivityIcon, CapIcon, UserIcon, UsersIcon } from '@/components/icons';
import './card-home.css';
import HomeInfoCard from '@/components/home-info-card/home-info-card';

function HomeInfo() {
  return (
    <div className="home-info_container">
      <div className="home-info_container__cards">
        <HomeInfoCard 
          link="/alunos"
          title="Alunos"
          content="45"
          icon={<UserIcon />}
        />
        <HomeInfoCard 
          link="/instrutores"
          title="Instrutores"
          content="20"
          icon={<CapIcon />}
        />
        <HomeInfoCard 
          link="/turmas"
          title="Turmas"
          content="5"
          icon={<UsersIcon />}
        />
        <HomeInfoCard 
          link="/atividades"
          title="Atividades"
          content="7"
          icon={<ActivityIcon />}
        />
      </div>
    </div>
  )
}

export default HomeInfo