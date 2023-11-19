import { Aluno } from '@/types/Aluno';
import data from './MOCK_DATA.json';

export function getAllMembros(): Aluno[] {
  return data;
}