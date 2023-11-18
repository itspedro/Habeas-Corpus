import { Aluno } from "@/types/Aluno";

function StudentCard({nome, email, dataCancelamento}:  Aluno) {
  return (
    <div className="student-card_container">
      <span className={`student-card_container__status ${dataCancelamento ? 'red' : 'green'}`}>
      </span>
      <div className="student-card_container__info">
        <div className="student-card_container__info__name">
          {nome}
        </div>
        <div className="student-card_container__info__email">
          {email}
        </div>
      </div>
    </div>
  )
}

export default StudentCard;