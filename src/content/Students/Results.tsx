import './results.css';
import StudentCard from "@/components/student/student-card"

const fakeStudents = [
  {
    cpf: '',
    nome: 'João',
    endereco: '',
    cep: '',
    bairro: '',
    telefone: '',
    dataNascimento: '',
    codMatricula: '',
    codMensalidade: '',
    data: '',
    dataVencimento: '',
    valor: '',
    email: 'email@email.email',
    dataCancelamento: '',
    sexo: ''
  },
]

function Results() {
  return (
    <div className="results_container">
      <h3>Resultados</h3>
      <div className="results_container__list">
        {fakeStudents.map((student) => (
          <StudentCard
            {...student}
          />
        ))}
      </div>
    </div>
  )
}

export default Results