import React from 'react';

interface TableDataProps<T> {
  data: T;
  tableHeadings: Array<string>;
  status?: boolean;
}


function TableData<T>(
  { data, tableHeadings, status }: TableDataProps<T>
) {

  return (
    <tr className="table-data_container">
      {tableHeadings.filter((item) => item !== 'status').map((item, index) => (
          <td key={index}>
            {data[item as keyof T] as React.ReactNode}
          </td>
      ))}
      {status !== (null || undefined) && (
        <td className="table-data_container__status">
          {status ? 'Ativo' : 'Inativo'}
        </td>
      )}
    </tr>
  )
}

export default TableData;