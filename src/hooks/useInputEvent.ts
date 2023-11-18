import { useEffect, useState } from "react";


export function useInputEvent(): string | null {
  
  const [key, setKey] = useState<string | null>(null)
  useEffect(() => {
    const keydownHandler = ({ code }: KeyboardEvent) => setKey(code);
    const keyupHandler = () => setKey(null);

    global.addEventListener('keydown', keydownHandler);
    global.addEventListener('keyup', keyupHandler);

    return () => {
      global.removeEventListener('keydown', keydownHandler);
      global.removeEventListener('keyup', keyupHandler);
    }

  }, [key])
  
  return key;
}