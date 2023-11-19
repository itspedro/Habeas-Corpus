import { Aluno } from '@/types/Aluno';
import { Professor } from '@/types/Professor';
import dataAlunos from './data/alunos.json';
import dataProfessores from './data/professores.json';

export function getAllStudents(): Aluno[] {
  return dataAlunos;
}

export function getAllTeachers(): Professor[] {
  return dataProfessores;
}