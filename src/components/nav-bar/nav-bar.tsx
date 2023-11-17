import { SettingsIcon } from "../icons";
import NavBarItem from "./nav-bar-item";


function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavBarItem
            label="Geral"
            route="/"
          />
        </li>
        <li>
          <NavBarItem
            label="Alunos"
            route="/alunos"
          />
        </li>
        <li>
        <NavBarItem
            label="Turmas"
            route="/turmas"
          />
        </li>
        <li>
          <NavBarItem
            label="Professores"
            route="/professores"
          />
        </li>
        <li>
          <NavBarItem
            label="Disciplinas"
            route="/disciplinas"
          />
        </li>
        <li>
          <NavBarItem
            label="Unidade"
            route="/unidade"
          />
        </li>
      </ul>
      <button className="top-bar_controls__settings"><SettingsIcon /></button>
    </nav>
  );
}

export default NavBar;