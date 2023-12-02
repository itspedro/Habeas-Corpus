import ResultsTable from '@/components/results-table/results-table';
import { getAllActivities } from '@/utils/misc';



function Results() {

  return (
    <ResultsTable
      getArray={getAllActivities}
      tableHeadings={[
        {
          label: 'Código',
          key: 'codAtividade'
        },
        {
          label: 'Nome',
          key: 'nomeAtividade'
        },
        {
          label: 'Tipo',
          key: 'tipoAtividade'
        }
      ]}
    />
  )
}

export default Results;