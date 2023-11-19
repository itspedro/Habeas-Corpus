import { useState } from 'react';
import './results.css';
import StudentCard from "@/components/student/student-card"
import { Aluno } from '@/types/Aluno';
import { getAllMembros } from '@/utils/misc';
import Pagination from '@/components/pagination/pagination';
import { useFilter } from '@/hooks/useFilter';
import { FilterType } from '@/types/FilterType';

const students: Aluno[] = getAllMembros();

function Results() {

  const { search, type } = useFilter();
  const studentsFilter = students.filter((item) => {
    switch (type) {
      case FilterType.INACTIVE:
        return item.dataCancelamento != null;
      case FilterType.ACTIVE: 
        return !item.dataCancelamento;
      case FilterType.ALL:
        return true;
      default:
        return true;
    }
  });
  const [curPage, setCurPage] = useState(1);
  const maxPerPage = 10;
  const lastIndex = curPage * maxPerPage;
  const firstIndex = lastIndex - maxPerPage;
  const currentStudents = studentsFilter.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(studentsFilter.length / maxPerPage);
  const studentSearchs = studentsFilter.filter((item) => item.nome.toLowerCase().includes(search.toLowerCase()));


  return (
    <div className="results_container">
      <div className="results_container__header">
        <span className="results_container__span">{type}</span>
        <h3 className="results_container__h3">Resultados {search.toLowerCase() !== '' && studentSearchs.length}</h3>
      </div>
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
          {search.toLowerCase() !== '' ? studentSearchs.map((student, index) => (
              <StudentCard
                key={index}
                {...student}
              />
            )) : currentStudents.map((student, index) => (
            <StudentCard
              key={index}
              {...student}
            />
          ))}
        </tbody>
      </table>
      {search.toLowerCase() === '' &&
        <Pagination
          totalPages={totalPages}
          setCurPage={setCurPage}
          curPage={curPage}
        />
      }
    </div>
  )
}

export default Results