import { useState, useEffect } from 'react';
import { useSecretCode } from './useSecretCode';
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA"
]

export function useKonamiCode(): boolean {

  const [isSecret, setIsSecret] = useState<boolean>(false);
  const success = useSecretCode(konamiCode);

  useEffect(() => {
    if(success) {
      setIsSecret(true);
    }
    const timer = setTimeout(() => {
      setIsSecret(false);
    }, 1000);

    return () => clearTimeout(timer);

  }, [success])

  return isSecret;
}