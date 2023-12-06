import useDocumentTitle from '@/hooks/useDocumentTitle';
import Results from './Results';
import { useState } from 'react';
import AddStudent from './AddStudent';


function Students() {

  useDocumentTitle({ title: 'HC - Alunos' });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className="container">
          <div>
            <div>
              <h1>Alunos</h1>
              <Results />
              <button
                onClick={() => setModalIsOpen(true)}
              >
                Adicionar Aluno
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalIsOpen && <AddStudent setModalIsOpen={setModalIsOpen} />}
    </>
  );
}

export default Students;