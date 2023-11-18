import useDocumentTitle from '@/hooks/useDocumentTitle';

function Home() {
  
  useDocumentTitle({ title: 'HC - Visão geral' })
  return (
    <div>
      <h1>Visão geral</h1>
    </div>
  )
}

export default Home;