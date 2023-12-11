
import UnidadeForm from "@/components/form/unit-form";
import "./edit-unit.css";
import { Unidade } from '@/types/Unidade';
import { SubmitHandler } from 'react-hook-form';
import { updateUnit } from "@/utils/misc";


interface EditUnitProps {
  setModalIsOpen: (value: boolean) => void;
  currentValues?: Unidade;
}

function EditUnit({ setModalIsOpen, currentValues }: EditUnitProps) {

  const onSubmit: SubmitHandler<Unidade> = (data) => {
    console.log(data)
    updateUnit(data);
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
          <h3 className="edit-unit_container__title">Editar Unidade</h3>
          <button 
            className="edit-unit_close"
            onClick={() => setModalIsOpen(false)}
          >
            &#10006;
          </button>
        </div>
          <UnidadeForm
            onSubmit={onSubmit}
            currentValues={currentValues}
          />
      </section>
    </div>
  )
}

export default EditUnit;