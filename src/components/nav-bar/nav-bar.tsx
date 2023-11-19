import './nav-bar.css';
import {
  GridIcon,
  UserIcon,
  UsersIcon,
  UnidadeIcon,
  ActivityIcon,
  CapIcon
} from "@/components/icons";
import NavBarItem from "./nav-bar-item";
import logo from '@/assets/app/HC-logo.png';
import NavBarFooter from './nav-bar-footer';
import { useKonamiCode } from '@/hooks/useKonamiCode';


function NavBar() {
  
  const secret = useKonamiCode();
  const name = secret ? 'secret' : 'img';


  return (
    <nav className="nav-bar_container">
      <div className="nav-bar_container__logo">
        <img 
          src={logo}
          alt="Logo - Habeas Corpus"
          className={name}
        />
      </div>
      <ul className="nav-bar_container__list">
        <li>
          <NavBarItem
            label="Geral"
            route="/"
            icon={<GridIcon />}
          />
        </li>
        <li>
          <NavBarItem
            label="Alunos"
            route="/alunos"
            icon={<UserIcon />}
          />
        </li>
        <li>
        <NavBarItem
            label="Turmas"
            route="/turmas"
            icon={<UsersIcon />}
          />
        </li>
        <li>
          <NavBarItem
            label="Instrutores"
            route="/instrutores"
            icon={<CapIcon />}	
          />
        </li>
        <li>
          <NavBarItem
            label="Atividades"
            route="/atividades"
            icon={<ActivityIcon />}
          />
        </li>
        <li>
          <NavBarItem
            label="Unidade"
            route="/unidade"
            icon={<UnidadeIcon />}
          />
        </li>
      </ul>
      <NavBarFooter />

    </nav>
  );
}

export default NavBar;