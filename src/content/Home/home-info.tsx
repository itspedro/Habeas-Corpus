import { ActivityIcon, CapIcon, UserIcon, UsersIcon } from '@/components/icons';
import './card-home.css';
import HomeInfoCard from '@/components/home-info-card/home-info-card';
import { 
  getTotalStudents,
  getTotalTeachers,
  getTotalClasses,
  getTotalActivities
} from '@/utils/misc';

function HomeInfo() {
  
  let totalStudents = getTotalStudents();
  let totalTeachers = getTotalTeachers();
  let totalClasses = getTotalClasses();
  let totalActivities = getTotalActivities();

  return (
    <div className="home-info_container">
      <div className="home-info_container__cards">
        <HomeInfoCard 
          link="/alunos"
          title="Alunos"
          content={totalStudents.toString()}
          icon={<UserIcon />}
        />
        <HomeInfoCard 
          link="/turmas"
          title="Turmas"
          content={totalClasses.toString()}
          icon={<UsersIcon />}
        />
        <HomeInfoCard 
          link="/instrutores"
          title="Instrutores"
          content={totalTeachers.toString()}
          icon={<CapIcon />}
        />
        <HomeInfoCard 
          link="/atividades"
          title="Atividades"
          content={totalActivities.toString()}
          icon={<ActivityIcon />}
        />
      </div>
    </div>
  )
}

export default HomeInfo