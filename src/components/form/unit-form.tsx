import "./form.css";
import FormInput from '@/components/form/form-input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Unidade } from '@/types/Unidade';

const createUnidadeSchema = z.object({  
  nome: z.string()
    .min(3, 'O Nome deve ter no mínimo 3 caracteres.'),
  razaoSocial: z.string()
    .min(3, 'A Razão Social deve ter no mínimo 3 caracteres.'),
  endereco: z.string()
    .min(1, 'O Endereço é obrigatório.'),
  bairro: z.string()
    .min(1, 'O Bairro é obrigatório.'),
  cep: z.string()
    .min(1, 'O CEP é obrigatório.'),
  telefone: z.string()
    .min(1, 'O Telefone é obrigatório.'),
  cnpj: z.string()
    .min(1, 'O CNPJ é obrigatório.'),
  email: z.string()
    .min(1, 'O E-mail é obrigatório.')
    .email('E-mail inválido.')
});
interface FormProps {
  onSubmit: SubmitHandler<Unidade>;
  currentValues?: Unidade;
}

function UnidadeForm({ onSubmit, currentValues }: FormProps) {

  const { 
    handleSubmit,
    register,
    formState: { errors } 
  } = useForm<Unidade>({
    resolver: zodResolver(createUnidadeSchema),
    defaultValues: currentValues
  });


  return (
    <form
      className="form_container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        label="Nome da Unidade"
        name="nome"
        type="text"
        register={register}
        error={errors.nome}
      />
      <FormInput
        label="Razão Social"
        name="razaoSocial"
        type="text"
        register={register}
        error={errors.razaoSocial}
        />
      <FormInput
        label="Endereco"
        name="endereco"
        type="text"
        register={register}
        error={errors.endereco}
        />
      <FormInput
        label="Bairro"
        name="bairro"
        type="text"
        register={register}
        error={errors.bairro}
        />
      <FormInput
        label="CEP"
        name="cep"
        type="text"
        value={currentValues?.cep}
        mask="99999-999"
        register={register}
        error={errors.cep}
        />
      <FormInput
        label="Telefone"
        name="telefone"
        type="text"
        value={currentValues?.telefone}
        mask="(99) 9999-9999"
        register={register}
        error={errors.telefone}
      />
      <FormInput
        label="CNPJ"
        name="cnpj"
        type="text"
        value={currentValues?.cnpj}
        mask="99.999.999/9999-99"
        register={register}
        error={errors.cnpj}
      />
      <FormInput
        label="E-mail"
        name="email"
        type="email"
        register={register}
        error={errors.email}
      />
      <input
        className="form_container-submit"
        type="submit"
        value="Editar"
      />
    </form>
  );
}

export default UnidadeForm;
