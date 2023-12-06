import './top-bar-styles.css';
import TopBarInputIcon from './top-bar-input';
import { useFilter } from '@/hooks/useFilter';
import TopBarAddButton from './top-bar-settings-button';
import TopBarFilterButton from './top-bar-filter-button';

function TopBar() {

  const {setSearch, search} = useFilter();
 

  return (
    <div className="top-bar_container">
      <TopBarInputIcon 
        value={search}
        handleChange={setSearch}
      />
      <div className="top-bar_container__controls">
        <TopBarFilterButton />
        <TopBarAddButton />
      </div>
    </div>
  )
}

export default TopBar;