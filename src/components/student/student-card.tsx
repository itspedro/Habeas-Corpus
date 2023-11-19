import './student-card.css';
import { Aluno } from "@/types/Aluno";

function StudentCard({
  codMatricula,
  nome,
  email,
  sexo,
  dataCancelamento
}:  Aluno) {
  return (
    <tr className="student-card_container">
      <td className="student-card_container__matricula">
        {codMatricula}
      </td>
      <td className="student-card_container__name">
        {nome}
      </td>
      <td className="student-card_container__email">
        {email}
      </td>
      <td className="student-card_container__sexo">
        {sexo}
      </td>
      <td className="student-card_container__status">
        {dataCancelamento ? 'Inativo' : 'Ativo'}
      </td>
    </tr>
  )
}

export default StudentCard;