import "./form.css";
import "./turma-form.css";
import FormInput from '@/components/form/form-input';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { z } from 'zod';
//import { isValidDate, formatDate } from '@/utils/dayjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { Turma } from '@/types/Turma';
import Select from 'react-select';
import { getAllActivities, getAllStudents, getAllTeachers } from "@/utils/misc";
import { Aluno } from "@/types/Aluno";
import { Atividade } from "@/types/Atividade";
import { Professor } from "@/types/Professor";

let totalCapacidade = 0;

const createTurmaSchema = z.object({
  horario: z.string()
    .min(1, 'O Horário é obrigatório.'),
  aulasSemana: z.string()
    .min(1, 'A quantidade de aulas é obrigatória.')
    .refine(aulasSemana => {
      return Number(aulasSemana) > 0 && Number(aulasSemana) <= 7;
    }, 'A Quantidade de Aulas Semanais deve ser maior que 0 e no máximo 7.')
    .transform(aulasSemana => {
      return Number(aulasSemana);
    }),
  capacidade: z.string()
    .min(1, 'A Capacidade é obrigatória.')
    .refine(capacidade => {
      return Number(capacidade) > 0;
    }, 'A Capacidade deve ser maior que 0.')
    .transform(capacidade => {
      totalCapacidade = Number(capacidade);
      return Number(capacidade);
    }),
  alunos: z.array(z.object({
    value:z.string(),
    label:z.string()
  }))
    .min(1, 'É necessário pelo menos 1 aluno.')
    .refine(alunos => {
      return alunos.length <= totalCapacidade;
    }, 'A quantidade de alunos deve ser menor ou igual a capacidade da turma.')
    .transform(alunos => {
      return alunos.map(aluno => (
        {cpf: aluno.value}
      ));
    }),
  atividades: z.array(z.object({
    value:z.string(),
    label:z.string()
  }))
    .min(1, 'É necessário pelo menos 1 atividade.')
    .transform(atividades => {
      return atividades.map(atividade => (
        {codAtividade: atividade.value}
      ));
    }),
  instrutor: z.object({
    value:z.string(),
    label:z.string()
  })
    .refine(instrutor => {
      return instrutor.value !== "";
    }, 'O Instrutor é obrigatório.')
    .transform(instrutor => {
      return {cpf: instrutor.value};
    }),
});

interface FormProps {
  onSubmit: SubmitHandler<Turma>;
}

function TurmaForm({ onSubmit }: FormProps) {

  const { 
    handleSubmit,
    register,
    control,
    formState: { errors } 
  } = useForm<Turma>({
    resolver: zodResolver(createTurmaSchema)
  });

  const allAlunos: Aluno[] = getAllStudents();
  const optionsAlunos = allAlunos.filter(u => u.status === true).map(aluno => {
    return {
      value: aluno.cpf,
      label: aluno.nome
    }
  });

  const allAtividades: Atividade[] = getAllActivities();
  const optionsAtividades = allAtividades.map(atividade => {
    return {
      value: atividade.codAtividade,
      label: atividade.nomeAtividade
    }
  });

  const allInstrutores: Professor[] = getAllTeachers();
  const optionsInstrutores = allInstrutores.map(professor => {
    return {
      value: professor.cpf,
      label: professor.nome
    }
  });

  return (
    <form
      className="form_container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        label="Horário"
        name="horario"
        type="text"
        mask="99:99"
        register={register}
        error={errors.horario}
      />
      <FormInput
        label="Aulas Semanais"
        name="aulasSemana"
        type="number"
        register={register}
        error={errors.aulasSemana}
      />
      <FormInput
        label="Capacidade"
        name="capacidade"
        type="number"
        register={register}
        error={errors.capacidade}
      />
      <div>
        <label htmlFor="alunos">Alunos</label>
        <Controller
          name="alunos"
          control={control}
          render={({ field }) => (
            <Select
              {... field}
              isMulti
              options={optionsAlunos}
              closeMenuOnSelect={false}
            />
          )}
        />
        {errors.alunos && (
          <span className="form-input_container__input-error">
            {errors.alunos.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="atividades">Atividades</label>
        <Controller
          name="atividades"
          control={control}
          render={({ field }) => (
            <Select
              {... field}
              isMulti
              options={optionsAtividades}
            />
          )}
        />
        {errors.atividades && (
          <span className="form-input_container__input-error">
            {errors.atividades.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="instrutor">Instrutor</label>
        <Controller
          name="instrutor"
          control={control}
          render={({ field }) => (
            <Select
              {... field}
              options={optionsInstrutores}
            />
          )}
        />
        {errors.instrutor && (
          <span className="form-input_container__input-error">
            {errors.instrutor.message as React.ReactNode}
          </span>
        )}
      </div>
      <input
        className="form_container-submit"
        type="submit"
        value="Cadastrar"
      />
    </form>
  );
}

export default TurmaForm;
