import TopBar from '@/components/top-bar/top-bar';
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
            <TopBar />
            <Results />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;