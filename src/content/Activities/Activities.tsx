import TopBar from '@/components/top-bar/top-bar';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import Results from './Results';


function Activities() {

  useDocumentTitle({title: 'HC - Atividades',});

  return (
    <div>
      <div className="container">
        <div>
          <div>
            <h1>Atividades</h1>
            <TopBar />
            <Results />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;