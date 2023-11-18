import { useEffect, useState } from "react";
import { useInputEvent } from "./useInputEvent";


export function useSecretCode(secretCode: string[]): boolean {

  const [current, setCurrent] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);

  const key = useInputEvent();

  useEffect(() => {

    if (key == null) return;

    if (key !== secretCode[current]) {
        setCurrent(0);
        return;
    }

    setCurrent((value) => value + 1);

    if (current + 1 !== secretCode.length) {
        setSuccess(false);
        return
    }
    setSuccess(true);
    
  }, [key])

  return success;
}