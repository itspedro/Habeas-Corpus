import './add-teacher.css';
import { Professor } from '@/types/Professor';
import { cadastrarProfessor } from '@/utils/misc';
import ProfessorForm from '@/components/form/professor-form';
import { SubmitHandler } from 'react-hook-form';


interface AddTeacherProps {
  setModalIsOpen: (value: boolean) => void;
}

function AddTeacher({ setModalIsOpen }: AddTeacherProps) {

  const onSubmit: SubmitHandler<Professor> = (data) => {
    console.log(data);
    cadastrarProfessor(data);
    setModalIsOpen(false);
  }

  return (
    <div 
      className="add-teacher"
      onClick={() => setModalIsOpen(false)}
    >
      <section 
        className="add-teacher_container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="add-teacher_container__header">
          <h3 className="add-teacher_container__title">Cadastrar Instrutor</h3>
          <button 
            className="add-teacher_close"
            onClick={() => setModalIsOpen(false)}
          >
            &#10006;
          </button>
        </div>
        <ProfessorForm
          onSubmit={onSubmit}
        />
      </section>
    </div>
  )
}

export default AddTeacher;