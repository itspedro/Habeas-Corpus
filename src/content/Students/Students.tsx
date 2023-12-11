import useDocumentTitle from "@/hooks/useDocumentTitle";
import Results from "./Results";
import { useState } from "react";
import AddStudent from "./AddStudent";
import PageHeader from "@/components/page-header/page-header";

function Students() {
  useDocumentTitle({ title: "HC - Alunos" });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className="students_container">
          <div>
            <div>
              <PageHeader setModalIsOpen={setModalIsOpen} title="Alunos" label="Cadastrar Aluno" />
              <Results />
            </div>
          </div>
        </div>
      </div>
      {modalIsOpen && <AddStudent setModalIsOpen={setModalIsOpen} />}
    </>
  );
}

export default Students;
