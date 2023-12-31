import { getAllStudents } from '@/utils/misc';
import ResultsTable from '@/components/results-table/results-table';

function Results() {

  return (
    <ResultsTable
      getArray={getAllStudents}
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
  )
}

export default Results;