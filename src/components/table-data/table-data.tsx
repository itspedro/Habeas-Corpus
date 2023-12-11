import { EditIcon } from "../icons";
import "./table-data.css";
import React from "react";

interface TableDataProps<T> {
  data: T;
  tableHeadings: Array<string>;
  status?: boolean;
  openModal: (item: T) => void;
}

function TableData<T>({
  data,
  tableHeadings,
  status,
  openModal,
}: TableDataProps<T>) {
  return (
    <tr className="table-data_container" onClick={() => openModal(data)}>
      {tableHeadings
        .filter((item) => item !== "status")
        .map((item, index) => (
          <td key={index}>{data[item as keyof T] as React.ReactNode}</td>
        ))}
      {status !== (null || undefined) && (
        <>
          <td>
            <span className={`status-badge ${status ? "ativo" : "inativo"}`}>
              {status ? "Ativo" : "Inativo"}
            </span>
          </td>
          <button
            className="edit-button"
            onClick={(e) => {
              e.stopPropagation();
              console.log(data);
            }}
          >
            <EditIcon />
          </button>
        </>
      )}
    </tr>
  );
}

export default TableData;
