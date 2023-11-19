import './results-table.css';
import { useState } from 'react';
import Pagination from '@/components/pagination/pagination';
import { useFilter } from '@/hooks/useFilter';
import { FilterType } from '@/types/FilterType';
import TableData from '../table-data/table-data';

type HeadingsType = {
  label: string,
  key: string
}

interface ResultsTableProps<T extends { 
  status: boolean
  nome: string
} > {
  getArray: () => Array<T>;
  tableHeadings: Array<HeadingsType>;
}

function ResultsTable<T extends { 
  status: boolean
  nome: string
} >({ 
  getArray, tableHeadings 
}: ResultsTableProps<T>) {
  
  const data: Array<T> = getArray();
  const { search, type } = useFilter();
  const filteredData: Array<T> = data.filter((item) => {
    switch (type) {
      case FilterType.INACTIVE:
        return !item.status;
      case FilterType.ACTIVE: 
        return item.status;
      case FilterType.ALL:
        return true;
      default:
        return true;
    }
  });

  const [curPage, setCurPage] = useState(1);
  const maxPerPage = 10;
  const lastIndex = curPage * maxPerPage;
  const firstIndex = lastIndex - maxPerPage;
  const currentData = filteredData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredData.length / maxPerPage);
  const searchedData = filteredData.filter((item) => item.nome.toLowerCase().includes(search.toLowerCase()));


  return (
    <div className="results_container">
      <div className="results_container__header">
        <span className="results_container__span">{type}</span>
        <h3 className="results_container__h3">Resultados {search.toLowerCase() !== '' && searchedData.length}</h3>
      </div>
      <table className="results_container__table">
        <thead className="results_container__table__header">
          <tr>
            {tableHeadings.map((heading, index) => (
              <th key={index}>{heading.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {search.toLowerCase() !== '' ? searchedData.map((item, index) => (
              <TableData
                key={index}
                data={item}
                tableHeadings={tableHeadings.map((heading) => heading.key)}
              />
            )) : currentData.map((item, index) => (
              <TableData
                key={index}
                data={item}
                tableHeadings={tableHeadings.map((heading) => heading.key)}
              />
          ))}
        </tbody>
      </table>
      {search.toLowerCase() === '' &&
        <Pagination
          totalPages={totalPages}
          setCurPage={setCurPage}
          curPage={curPage}
        />
      }
    </div>
  )
}

export default ResultsTable;