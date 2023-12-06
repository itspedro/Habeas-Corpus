import ResultsTable from '@/components/results-table/results-table';
import { getLatestStudents } from '@/utils/misc';


function RecentUsers() {
  return (
    <div>
      <h2>Alunos Recentes</h2>
      <div>
        <ResultsTable
          getArray={getLatestStudents}
          tableHeadings={[
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
              label: 'Matricula',
              key: 'cod_matricula'
            }
          ]}
        />
      </div>
    </div>
  )
}

export default RecentUsers;