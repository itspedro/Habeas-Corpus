import { FilterContext } from '@/contexts/filter-context';
import { useContext } from 'react';

/**
 * Esse hook é responsável por retornar o contexto de filtro
 * usando o hook "useContext" padrão do React.
 * 
 */

export function useFilter() {
  return useContext(FilterContext);
}
