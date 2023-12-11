import useDocumentTitle from "@/hooks/useDocumentTitle";
import Results from "./Results";
import { useState } from "react";
import AddActivities from "./AddActivities";
import PageHeader from "@/components/page-header/page-header";

function Activities() {
  useDocumentTitle({ title: "HC - Atividades" });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className="atividade_container">
          <div>
            <div>
              <PageHeader setModalIsOpen={setModalIsOpen} title="Atividades" label="Cadastrar Atividade" />
              <Results />
            </div>
          </div>
        </div>
      </div>
      {modalIsOpen && <AddActivities setModalIsOpen={setModalIsOpen} />}
    </>
  );
}

export default Activities;
