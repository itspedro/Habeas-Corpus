import ResultsTable from '@/components/results-table/results-table';
import { getAllClasses } from '@/utils/misc';

function Results() {

  return (
    <ResultsTable
      getArray={getAllClasses}
      tableHeadings={[
        {
          label: 'Código',
          key: 'codTurma'
        },
        {
          label: 'Horário',
          key: 'horario'
        },
        {
          label: 'Aulas/Semana',
          key: 'aulasSemana'
        },
        {
          label: 'Capacidade',
          key: 'capacidade'
        }
      ]}
    />
  )
}

export default Results;