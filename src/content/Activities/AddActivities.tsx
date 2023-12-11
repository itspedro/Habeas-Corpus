import "./add-activities.css";
import { Atividade } from '@/types/Atividade';
import { cadastrarAtividade } from '@/utils/misc';
import AtividadeForm from '@/components/form/atividade-form';
import { SubmitHandler } from 'react-hook-form';


interface AddActivitiesProps {
  setModalIsOpen: (value: boolean) => void;
}

function AddActivities({ setModalIsOpen }: AddActivitiesProps) {

  const onSubmit: SubmitHandler<Atividade> = (data) => {
    console.log(data);
    cadastrarAtividade(data);
    setModalIsOpen(false);
  }

  return (
    <div 
      className="add-activities"
      onClick={() => setModalIsOpen(false)}
    >
      <section 
        className="add-activities_container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="add-activities_container__header">
          <h3 className="add-activities_container__title">Cadastrar Atividade</h3>
          <button 
            className="add-activities_close"
            onClick={() => setModalIsOpen(false)}
          >
            &#10006;
          </button>
        </div>
        <AtividadeForm
          onSubmit={onSubmit}
        />
      </section>
    </div>
  )
}

export default AddActivities;