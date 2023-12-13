import { Aluno } from "@/types/Aluno";
import { EditIcon } from "../icons";
import "./table-data.css";
import React from "react";
import EditAluno from "./edit-aluno";
import EditProfessor from "./edit-professor";
import { Professor } from "@/types/Professor";

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

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  let isAluno = (data as Aluno).cod_matricula !== undefined;

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
              setModalIsOpen(true);
            }}
          >
            <EditIcon />
          </button>
          {modalIsOpen && isAluno && <EditAluno setModalIsOpen={setModalIsOpen} currentValues={data as Aluno} />}
          {modalIsOpen && !isAluno && <EditProfessor setModalIsOpen={setModalIsOpen} currentValues={data as Professor} />}
        </>
      )}
    </tr>
  );
}

export default TableData;
