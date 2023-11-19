import React from 'react';

interface TableDataProps<T extends {
  status: boolean;
}> {
  data: T;
  tableHeadings: Array<string>;
}

function renderTableCell<T extends Record<string, any>>(data: T, key: keyof T): React.ReactNode {
  const value = data[key];
  return value;
}

function TableData<T extends {
  status: boolean
}>(
  { data, tableHeadings }: TableDataProps<T>
) {

  return (
    <tr className="table-data_container">
      {tableHeadings.filter((item) => item.toLowerCase() !== 'status').map((item, index) => (
          <td key={index}>
            {renderTableCell(data, item.toLowerCase() as keyof T)}
          </td>
      ))}
      <td className="table-data_container__status">
        {data.status ? 'Ativo' : 'Inativo'}
      </td>
    </tr>
  )
}

export default TableData;