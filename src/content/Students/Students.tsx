import TopBar from '@/components/top-bar/top-bar';
import useDocumentTitle from '@/hooks/useDocumentTitle';


function Students() {

  useDocumentTitle({ title: 'HC - Alunos' });

  return (
    <div>
      <div className="container">
        <TopBar />
        <div className="row">
          <div className="col-12">
            <h1>Alunos</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;