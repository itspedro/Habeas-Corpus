
import AlunoForm from "@/components/form/aluno-form";

import { Aluno } from '@/types/Aluno';
import { SubmitHandler } from 'react-hook-form';
// import { updateAluno } from "@/utils/misc";


interface EditAlunoProps {
  setModalIsOpen: (value: boolean) => void;
  currentValues?: Aluno;
}

function EditAluno({ setModalIsOpen, currentValues }: EditAlunoProps) {

  const onSubmit: SubmitHandler<Aluno> = (data) => {
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
          <h3 className="edit-unit_container__title">Editar Aluno</h3>
          <button 
            className="edit-unit_close"
            onClick={() => setModalIsOpen(false)}
          >
            &#10006;
          </button>
        </div>
          <AlunoForm
            onSubmit={onSubmit}
            currentValues={currentValues}
          />
      </section>
    </div>
  )
}

export default EditAluno;