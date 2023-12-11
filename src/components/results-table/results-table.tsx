import "./results-table.css";
import { useState } from "react";
import Pagination from "@/components/pagination/pagination";
import { FilterType } from "@/types/FilterType";
import TableData from "../table-data/table-data";
import ItemModal from "../item-modal/item-modal";
import { useFilter } from "@/hooks/useFilter";

type HeadingsType = {
  label: string;
  key: string;
};

interface ResultsTableProps<T> {
  getArray: () => Array<T>;
  tableHeadings: Array<HeadingsType>;
}

function ResultsTable<T>({ 
  getArray, tableHeadings
}: ResultsTableProps<T>) {
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T>();


  const openModal = (item: T) => {
    setModal(true);
    setSelectedItem(item);
  };

  const keys = tableHeadings.map((item) => item.key);
  const nameKey = keys.filter((item) => item === 'nome' || item.startsWith('cod'));
  const data: Array<T> = getArray();
  const filterKeys = data.length > 0 ? (Object.keys(data[0] as string).filter((item) => !nameKey.includes(item))) : [];
  const statusIndex = filterKeys.findIndex((item) => item.toLowerCase() === 'status');

  const { search, type } = useFilter();
  const filteredData: Array<T> = data.filter((item) => {
    switch (type) {
      case FilterType.INACTIVE:
        return !(item[filterKeys[statusIndex] as keyof T] as boolean);
      case FilterType.ACTIVE:
        return item[filterKeys[statusIndex] as keyof T] as boolean;
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
  const searchedData = filteredData.filter((item) =>
    item[nameKey[0] as keyof T]
      ?.toString()
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    item[nameKey[1] as keyof T]
      ?.toString()
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
    {data.length > 0 ? (
      <div className="results_container">
        <div className="results_container__header">
          <span className="results_container__span">{type}</span>
          <h3 className="results_container__h3">
            Resultados {search.toLowerCase() !== "" && searchedData.length}
          </h3>
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
            {search.toLowerCase() !== ""
              ? searchedData.map((item, index) => (
                  <TableData
                    key={index}
                    data={item}
                    tableHeadings={tableHeadings.map((heading) => heading.key)}
                    status={item[filterKeys[statusIndex] as keyof T] as boolean}
                    openModal={openModal}
                  />
                ))
              : currentData.map((item, index) => (
                  <TableData
                    key={index}
                    data={item}
                    tableHeadings={tableHeadings.map((heading) => heading.key)}
                    status={item[filterKeys[statusIndex] as keyof T] as boolean}
                    openModal={openModal}
                  />
                ))}
          </tbody>
        </table>
        {search.toLowerCase() === "" && totalPages >= 2 && (
          <Pagination
            totalPages={totalPages}
            setCurPage={setCurPage}
            curPage={curPage}
          />
        )}
      </div>
      
    ) : (
      <div className="results_container">
        <div className="results_container__header">
          <span className="results_container__span">{type}</span>
          <h3 className="results_container__h3">
            Resultados {search.toLowerCase() !== "" && searchedData.length}
          </h3>
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
            <tr>
              <td colSpan={tableHeadings.length} className="results_container__table__td">
                Nenhum resultado encontrado.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )}
    {modal && <ItemModal data={selectedItem as object} setModal={setModal} />}
    </>
  );
}

export default ResultsTable;
