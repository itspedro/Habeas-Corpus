import { useNavigate } from 'react-router-dom';
import { UnitIcon } from '../icons';
import './top-bar-unit-button.css';


function TopBarUnitButton() {
  
  const navigate = useNavigate();

  return (
    <button 
      className="top-bar-unit-button_container"
      onClick={() => navigate('/unidade')}
    ><UnitIcon /></button>
  )
}

export default TopBarUnitButton;