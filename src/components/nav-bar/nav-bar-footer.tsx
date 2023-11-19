import { Link } from 'react-router-dom';
import './nav-bar-footer.css';
import { GitHubIcon } from '../icons';

function NavBarFooter() {
  return (
    <div className="nav-bar-footer_container">
      <Link 
        to={"https://github.com/itspedro/habeas-corpus"}
        target='_blank'
        className="nav-bar-footer_container__link"
      ><span className="nav-bar-footer_container__link-icon"><GitHubIcon /></span>Código</Link>
    </div>
  )
}

export default NavBarFooter