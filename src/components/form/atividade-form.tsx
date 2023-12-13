import "./form.css";
import FormInput from '@/components/form/form-input';
import FormSelect from '@/components/form/form-select';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Atividade } from '@/types/Atividade';

const createAtividadeSchema = z.object({  
  nomeAtividade: z.string()
    .min(3, 'O Nome deve ter no mínimo 3 caracteres.'),
  tipoAtividade: z.string()
});
interface FormProps {
  onSubmit: SubmitHandler<Atividade>;
  currentValues?: Atividade;
}

function AtividadeForm({ onSubmit, currentValues }: FormProps) {

  const { 
    handleSubmit,
    register,
    formState: { errors } 
  } = useForm<Atividade>({
    resolver: zodResolver(createAtividadeSchema),
    defaultValues: currentValues
  });


  return (
    <form
      className="form_container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        label="Nome da Atividade"
        name="nomeAtividade"
        type="text"
        register={register}
        error={errors.nomeAtividade}
      />
      <FormSelect
        label="Tipo de Atividade"
        name="tipoAtividade"
        options={[
          { value: "Musculação", label: "Musculação" },
          { value: "Ioga", label: "Ioga" },
          { value: "CrossFit", label: "CrossFit" },
        ]}
        register={register}
        error={errors.tipoAtividade}
      />
      <input
        className="form_container-submit"
        type="submit"
        value={currentValues ? "Editar" : "Cadastrar"}
      />
    </form>
  );
}

export default AtividadeForm;
