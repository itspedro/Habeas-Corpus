import { Aluno } from '@/types/Aluno';
import data from './data.json';

export function getAllMembros(): Aluno[] {
  return data;
}