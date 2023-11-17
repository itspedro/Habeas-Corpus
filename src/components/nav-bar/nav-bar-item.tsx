import { Link } from 'react-router-dom';


interface NavBarItemProps {
  label: string;
  route: string;
}

function NavBarItem(props: NavBarItemProps) {
  return (
    <div className="nav-bar-item_container">
      <Link to={props.route} className="nav-bar-item_container__link">
        {props.label}
      </Link>
    </div>
  );
}

export default NavBarItem;