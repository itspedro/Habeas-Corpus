import useDocumentTitle from '@/hooks/useDocumentTitle';
import Results from './Results';


function Teachers() {

  useDocumentTitle({ title: 'HC - Instrutores' });

  return (
    <div>
      <div className="container">
        <div>
          <div>
            <h1>Instrutores</h1>
            <Results />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;