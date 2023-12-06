import { Aluno } from '@/types/Aluno';
import './add-student.css';
import { useForm, SubmitHandler } from "react-hook-form";

interface ItemModalProps {
  setModalIsOpen: (value: boolean) => void;
}

function AddStudent(props: ItemModalProps) {

  const { handleSubmit, register } = useForm<Aluno>();

  const onSubmit: SubmitHandler<Aluno> = (data) => console.log(data);

  
  return (
    <div className="add-student">
      <section className="add-student_container">
        <form className="add-student_container__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="add-student_container__form__input-div">
            <label htmlFor= "nome">Nome</label>
            <input
              className="add-student_container__form__input"
              type="text"
              id="nome"
              {...register('nome')}
            />
          </div>
          <div className="add-student_container__form__input-div">
            <label htmlFor= "cpf">CPF</label>
            <input
              className="add-student_container__form__input"
              type="text"
              id="cpf"
              {...register('cpf')}
            />
          </div>
          <div className="add-student_container__form__input-div">
            <label htmlFor= "endereco">Endereço</label>
            <input
              className="add-student_container__form__input"
              type="text"
              id="endereco"
              {...register('endereco')}
            />
          </div>
          <div className="add-student_container__form__input-div">
            <label htmlFor= "bairro">Bairro</label>
            <input
              className="add-student_container__form__input"
              type="text"
              id="bairro"
              {...register('bairro')}
            />
          </div>
          <div className="add-student_container__form__input-div">
            <label htmlFor= "cep">CEP</label>
            <input
              className="add-student_container__form__input"
              type="text"
              id="cep"
              {...register('cep')}
            />
          </div>
          <div className="add-student_container__form__input-div">
            <label htmlFor= "telefone">Telefone</label>
            <input
              className="add-student_container__form__input"
              type="text"
              id="telefone"
              {...register('telefone')}
            />
          </div>
          <div className="add-student_container__form__input-div">
            <label htmlFor= "email">E-mail</label>
            <input
              className="add-student_container__form__input"
              type="email"
              id="email"
              {...register('email')}
            />
          </div>
          <div className="add-student_container__form__input-div">
            <label htmlFor= "data_nascimento">Data de Nascimento</label>
            <input
              className="add-student_container__form__input"
              type="date"
              id="data_nascimento"
              {...register('data_nascimento')}
            />
          </div>
          <div className="add-student_container__form__input-div">
            <label htmlFor= "sexo">Sexo</label>
            <input
              className="add-student_container__form__input"
              type="text"
              id="sexo"
              {...register('sexo')}
            />
          </div>
          <div className="add-student_container__form__input-div">
            <label htmlFor= "valor">Valor Mensalidade</label>
            <input
              className="add-student_container__form__input"
              type="text"
              id="valor"
              {...register('valor')}
            />
          </div>
          <input type="submit" />
        </form>
      </section>
    </div>
  )
}

export default AddStudent;