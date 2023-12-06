import { useNavigate } from 'react-router-dom';
import { SettingsIcon } from '../icons';
import './top-bar-settings-button.css';


function TopBarSettingsButton() {
  
  const navigate = useNavigate();

  return (
    <button 
      className="top-bar-settings-button_container"
      onClick={() => navigate('/unidade')}
    ><SettingsIcon /></button>
  )
}

export default TopBarSettingsButton;