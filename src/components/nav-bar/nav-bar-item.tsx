import './nav-bar-item.css';
import { Link } from 'react-router-dom';


interface NavBarItemProps {
  label: string;
  route: string;
  icon?: React.ReactNode;
}

function NavBarItem(props: NavBarItemProps) {
  return (
    <div className="nav-bar-item_container">
      <Link to={props.route} className="nav-bar-item_container__link">
        <div className="nav-bar-item_container__icon">
          {props.icon}
        </div>
        {props.label}
      </Link>
    </div>
  );
}

export default NavBarItem;