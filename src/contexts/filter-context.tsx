import { createContext, useState } from 'react';

export const FilterContext = createContext({
  search: '',
  setSearch: (value: string) => {}
});

interface ProviderProps {
  children: React.ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {

  const [search, setSearch] = useState('');

  return (
    <FilterContext.Provider
      value={{
        search,
        setSearch
      }}
    >
      {children}
    </FilterContext.Provider>
  );

}