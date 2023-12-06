import useDocumentTitle from '@/hooks/useDocumentTitle';
import Results from './Results';


function Classes() {

  useDocumentTitle({ title: 'HC - Turmas' });

  return (
    <div>
      <div className="container">
        <div>
          <div>
            <h1>Turmas</h1>
            <Results />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;