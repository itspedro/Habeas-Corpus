import './top-bar-styles.css';
import TopBarInputIcon from './top-bar-input';
import { useFilter } from '@/hooks/useFilter';
import TopBarAddButton from './top-bar-add-button';
import TopBarFilterButton from './top-bar-filter-button';

/**
 * Componente que contém o campo de pesquisa e o botão de configurações
 * 
 * 
 */


function TopBar() {

  const {setSearch, search} = useFilter();
 

  return (
    <div className="top-bar_container">
      <TopBarFilterButton />
      <TopBarInputIcon 
        value={search}
        handleChange={setSearch}
      />
      <TopBarAddButton />
    </div>
  )
}

export default TopBar;