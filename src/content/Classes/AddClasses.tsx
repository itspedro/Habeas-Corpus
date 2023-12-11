
import "./add-classes.css";
import { Turma } from '@/types/Turma';
import { cadastrarTurma } from '@/utils/misc';
import TurmaForm from '@/components/form/turma-form';
import { SubmitHandler } from 'react-hook-form';


interface AddClassesProps {
  setModalIsOpen: (value: boolean) => void;
}

function AddClasses({ setModalIsOpen }: AddClassesProps) {

  const onSubmit: SubmitHandler<Turma> = (data) => {
    cadastrarTurma(data);
    setModalIsOpen(false);
  }

  return (
    <div 
      className="add-classes"
      onClick={() => setModalIsOpen(false)}
    >
      <section 
        className="add-classes_container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="add-classes_container__header">
          <h3 className="add-classes_container__title">Cadastrar Turma</h3>
          <button 
            className="add-classes_close"
            onClick={() => setModalIsOpen(false)}
          >
            &#10006;
          </button>
        </div>
        <TurmaForm
          onSubmit={onSubmit}
        />
      </section>
    </div>
  )
}

export default AddClasses;