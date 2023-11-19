import { useState } from 'react';
import './results.css';
import StudentCard from "@/components/student/student-card"
import { Aluno } from '@/types/Aluno';
import { getAllMembros } from '@/utils/misc';
import Pagination from '@/components/pagination/pagination';

const students: Aluno[] = getAllMembros();

function Results() {
  
  const [curPage, setCurPage] = useState(1);
  const maxPerPage = 10;
  const lastIndex = curPage * maxPerPage;
  const firstIndex = lastIndex - maxPerPage;
  const currentStudents = students.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(students.length / maxPerPage);

  return (
    <div className="results_container">
      <h3>Resultados</h3>
      <table className="results_container__table">
        <thead className="results_container__table__header">
          <tr>
            <th>Matrícula</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Sexo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student, index) => (
            <StudentCard
              key={index}
              {...student}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        setCurPage={setCurPage}
        curPage={curPage}
      />
    </div>
  )
}

export default Results