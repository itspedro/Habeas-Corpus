import './top-bar.css';
import TopBarInputIcon from './top-bar-input';
import { useFilter } from '@/hooks/useFilter';
import TopBarUnitButton from './top-bar-unit-button';
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
        <TopBarUnitButton />
      </div>
    </div>
  )
}

export default TopBar;