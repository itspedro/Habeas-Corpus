
import ProfessorForm from "@/components/form/professor-form";

import { Professor } from '@/types/Professor';
import { SubmitHandler } from 'react-hook-form';
// import { updateProfessor } from "@/utils/misc";


interface EditProfessorProps {
  setModalIsOpen: (value: boolean) => void;
  currentValues?: Professor;
}

function EditProfessor({ setModalIsOpen, currentValues }: EditProfessorProps) {

  const onSubmit: SubmitHandler<Professor> = (data) => {
    console.log(data)
    setModalIsOpen(false);
  }

  return (
    <div 
      className="edit-unit"
      onClick={() => setModalIsOpen(false)}
    >
      <section 
        className="edit-unit_container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="edit-unit_container__header">
          <h3 className="edit-unit_container__title">Editar Professor</h3>
          <button 
            className="edit-unit_close"
            onClick={() => setModalIsOpen(false)}
          >
            &#10006;
          </button>
        </div>
          <ProfessorForm
            onSubmit={onSubmit}
            currentValues={currentValues}
          />
      </section>
    </div>
  )
}

export default EditProfessor;