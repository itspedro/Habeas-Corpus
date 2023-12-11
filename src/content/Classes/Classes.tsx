import useDocumentTitle from "@/hooks/useDocumentTitle";
import Results from "./Results";
import { useState } from "react";
import AddClasses from "./AddClasses";
import PageHeader from "@/components/page-header/page-header";

function Classes() {
  useDocumentTitle({ title: "HC - Turmas" });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className="turmas-container">
          <div>
            <div>
              <PageHeader setModalIsOpen={setModalIsOpen} title="Turmas" label="Cadastrar Turma" />
              <Results />
            </div>
          </div>
        </div>
      </div>
      {modalIsOpen && <AddClasses setModalIsOpen={setModalIsOpen} />}
    </>
  );
}

export default Classes;
