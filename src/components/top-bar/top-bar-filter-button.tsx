import './top-bar-filter-button.css';
import { FilterIcon } from '../icons';
import { useState } from 'react';
import { useFilter } from '@/hooks/useFilter';
import { FilterType } from '@/types/FilterType';

function TopBarFilterButton() {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {type, setType} = useFilter();

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div className="top-bar-filter-button_container">
      <button 
        className="top-bar-filter-button_container__button"
        onClick={handleClick}
      ><FilterIcon /></button>
      {isOpen && 
        <ul className="top-bar-filter-button_container__list">
          <li 
            className={`top-bar-filter-button_container__list-item ${type === FilterType.ALL && 'active'}`}
            onClick={() => {
              setType(FilterType.ALL);
              setIsOpen(false);
            }}
          >Todos</li>
          <li 
            className={`top-bar-filter-button_container__list-item ${type === FilterType.ACTIVE && 'active'}`}
            onClick={() => {
              setType(FilterType.ACTIVE);
              setIsOpen(false);
            }}
          >Ativos</li>
          <li 
            className={`top-bar-filter-button_container__list-item ${type === FilterType.INACTIVE && 'active'}`}
            onClick={() => {
              setType(FilterType.INACTIVE);
              setIsOpen(false);
            }}
          >Inativos</li>
        </ul>
      }
    </div>
  )
}

export default TopBarFilterButton;