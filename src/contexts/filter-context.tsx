import { createContext, useState } from 'react';
import { FilterType } from '@/types/FilterType';

export const FilterContext = createContext({
  search: '',
  type: FilterType.ALL,
  setSearch: (value: string) => {},
  setType: (value: FilterType) => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {

  const [search, setSearch] = useState('');
  const [type, setType] = useState(FilterType.ALL);

  return (
    <FilterContext.Provider
      value={{
        search,
        type,
        setSearch,
        setType,
      }}
    >
      {children}
    </FilterContext.Provider>
  );

}