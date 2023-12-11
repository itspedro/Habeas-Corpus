import { Aluno } from '@/types/Aluno';
import './add-student.css';
import { cadastrarAluno } from '@/utils/misc';
import AlunoForm from '@/components/form/aluno-form';
import { SubmitHandler } from 'react-hook-form';


interface AddStudentProps {
  setModalIsOpen: (value: boolean) => void;
}

function AddStudent({ setModalIsOpen }: AddStudentProps) {

  const onSubmit: SubmitHandler<Aluno> = (data) => {
    console.log(data);
    cadastrarAluno(data);
    setModalIsOpen(false);
  }

  return (
    <div 
      className="add-student"
      onClick={() => setModalIsOpen(false)}
    >
      <section 
        className="add-student_container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="add-student_container__header">
          <h3 className="add-student_container__title">Cadastrar Aluno</h3>
          <button 
            className="add-student_close"
            onClick={() => setModalIsOpen(false)}
          >
            &#10006;
          </button>
        </div>
        <AlunoForm
          onSubmit={onSubmit}
        />
      </section>
    </div>
  )
}

export default AddStudent;