import ResultsTable from '@/components/results-table/results-table';
import { getAllTeachers } from '@/utils/misc';

function Results() {

  return (
    <ResultsTable
      getArray={getAllTeachers}
      tableHeadings={[
        {
          label: 'cref',
          key: 'cref'
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
        }
      ]}
    />
  )
}

export default Results;