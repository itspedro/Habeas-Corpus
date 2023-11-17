import { useRef, useEffect } from 'react'


/**
 * Esse hook é responsável por alterar o título da página
 * usando o hook "useEffect" padrão do React.
 * 
 */

interface Props {
  title: string
  persistOnUnmount?: boolean
}

function useDocumentTitle(props: Props) {

  const prevTitleRef = useRef(document.title);

  useEffect(() => {
    document.title = props.title
  }, [props.title])

  useEffect(() => {
    if (!props.persistOnUnmount) {
      document.title = prevTitleRef.current;
    }
  }, [props.persistOnUnmount]);

}

export default useDocumentTitle;