import "./recents.css";
import ResultsTable from '@/components/results-table/results-table';
import { getLatestStudents } from '@/utils/misc';


function RecentUsers() {
  return (
    <div>
      <div className="recents_container_header">
        <h2>Alunos Recentes</h2>
      </div>
      <div>
        <ResultsTable
          getArray={getLatestStudents}
          tableHeadings={[
            {
              label: 'Matricula',
              key: 'cod_matricula'
            },
            {
              label: 'Nome',
              key: 'nome'
            },
            {
              label: 'Email',
              key: 'email'
            },
            {
              label: 'Sexo',
              key: 'sexo'
            },
            {
              label: 'Status',
              key: 'status'
            },
          ]}
        />
      </div>
    </div>
  )
}

export default RecentUsers;