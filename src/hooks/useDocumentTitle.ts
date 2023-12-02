import { useEffect } from 'react'
interface Props {
  title: string
}

function useDocumentTitle({title}: Props) {

  useEffect(() => {
    document.title = title
  }, [title])


}

export default useDocumentTitle;