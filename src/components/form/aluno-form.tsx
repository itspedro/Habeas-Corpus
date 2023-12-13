import "./form.css";
import FormInput from '@/components/form/form-input';
import FormSelect from '@/components/form/form-select';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { isValidDate } from '@/utils/dayjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { Aluno } from '@/types/Aluno';

const createAlunoSchema = z.object({
  nome: z.string()
    .min(3, 'O Nome deve ter no mínimo 3 caracteres.')
    .refine(nome => {
      return nome.split(' ').length >= 2;
    }, 'O Nome deve ter pelo menos 2 palavras.')
    .transform(nome => {
      nome.trim();
      const names = nome.split(' ');
      names.forEach((name, index) => {
        names[index] = name.charAt(0).toUpperCase() + name.slice(1);
      });
      return names.join(' ');
    }),
  cpf: z.string()
    .min(1, 'O CPF é obrigatório.')
    //eslint-disable-next-line
    .regex(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/, 'O CPF deve ser válido.')
    .transform(cpf => {
      return cpf.replace(/[^\d]/g, '');
    }),
  endereco: z.string()
    .min(1, 'O Endereco é obrigatório.'),
  bairro: z.string()
    .min(1, 'O Bairro é obrigatório.'),
  cep: z.string()
    .min(1, 'O CEP é obrigatório.'),
  telefone: z.string()
    .min(1, 'O Telefone é obrigatório.')
    //eslint-disable-next-line
    .regex(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/, 'O Telefone deve ser válido.'),
  email: z.string()
    .min(1, 'O E-mail é obrigatório.')
    .email('O E-mail deve ser válido.')
    .transform(email => {
      return email.toLowerCase();
    }),
  data_nascimento: z.string()
    .min(1, 'A Data de Nascimento é obrigatória.')
    .refine(data_nascimento => {
      return isValidDate(data_nascimento);
    }, 'A Data de Nascimento deve ser válida.'),
  sexo: z.string(),
  valor: z.string()
});

interface FormProps {
  onSubmit: SubmitHandler<Aluno>;
  currentValues?: Aluno;
}

function AlunoForm({ onSubmit, currentValues }: FormProps) {

  const { 
    handleSubmit,
    register,
    formState: { errors } 
  } = useForm<Aluno>({
    resolver: zodResolver(createAlunoSchema),
    defaultValues: currentValues
  });


  return (
    <form
      className="form_container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        label="Nome"
        name="nome"
        type="text"
        register={register}
        error={errors.nome}
      />
      <FormInput
        label="CPF"
        name="cpf"
        mask="999.999.999-99"
        type="text"
        value={currentValues?.cpf} 
        register={register}
        error={errors.cpf}
      />
      <FormInput
        label="Endereço"
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
        mask="99999-999"
        type="text"
        value={currentValues?.cep}
        register={register}
        error={errors.cep}
      />
      <FormInput
        label="Telefone"
        name="telefone"
        mask="(99) 99999-9999"
        type="text"
        value={currentValues?.telefone}
        register={register}
        error={errors.telefone}
      />
      <FormInput
        label="E-mail"
        name="email"
        type="email"
        register={register}
        error={errors.email}
      />
      <FormInput
        label="Data de Nascimento"
        name="data_nascimento"
        mask="99/99/9999"
        type="text"
        value={currentValues?.data_nascimento}
        register={register}
        error={errors.data_nascimento}
      />
      <FormSelect
        label="Sexo"
        name="sexo"
        options={[
          { value: "M", label: "Masculino" },
          { value: "F", label: "Feminino" },
        ]}
        register={register}
        error={errors.sexo}
      />
      <FormSelect
        label="Mensalidade"
        name="valor"
        options={[
          { value: "100", label: "Normal R$ 100,00" },
          { value: "150", label: "Premium R$ 150,00" },
        ]}
        register={register}
        error={errors.valor}
      />
      <input
        className="form_container-submit"
        type="submit"
        value={currentValues ? "Editar" : "Cadastrar"}
      />
    </form>
  );
}

export default AlunoForm;
