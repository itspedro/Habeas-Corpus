import useDocumentTitle from "@/hooks/useDocumentTitle";
import Results from "./Results";
import { useState } from "react";
import AddTeacher from "./AddTeacher";
import PageHeader from "@/components/page-header/page-header";

function Teachers() {
  useDocumentTitle({ title: "HC - Instrutores" });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className="instrutores-container">
          <div>
            <PageHeader setModalIsOpen={setModalIsOpen} title="Instrutores" label="Cadastrar Instrutor" />
            <Results />
          </div>
        </div>
      </div>
      {modalIsOpen && <AddTeacher setModalIsOpen={setModalIsOpen} />}
    </>
  );
}

export default Teachers;
