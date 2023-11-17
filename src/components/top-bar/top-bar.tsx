import './top-bar-styles.css';
import TopBarInputWicon from './top-bar-input';
import { useFilter } from '@/hooks/useFilter';

/**
 * Componente que contém o campo de pesquisa e o botão de configurações
 * 
 * 
 */


function TopBar() {

  const {setSearch, search} = useFilter();
 

  return (
    <div className="top-bar_container">
      <TopBarInputWicon 
        value={search}
        handleChange={setSearch}
      />
    </div>
  )
}

export default TopBar;