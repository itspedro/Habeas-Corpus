import TopBar from '@/components/top-bar/top-bar';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import Results from './Results';


function Students() {

  useDocumentTitle({ title: 'HC - Alunos' });

  return (
    <div>
      <div className="container">
        <div>
          <div>
            <h1>Alunos</h1>
            <TopBar />
            <Results />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;