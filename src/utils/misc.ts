import { Aluno } from '@/types/Aluno';
import { Professor } from '@/types/Professor';
import dataAlunos from './data/alunos.json';
import dataProfessores from './data/professores.json';
import dataAtividades from './data/atividades.json';
import { Atividade } from '@/types/Atividade';

export function getAllStudents(): Aluno[] {
  return dataAlunos;
}

export function getTotalStudents(): number {
  return dataAlunos.length;
}

export function getAllTeachers(): Professor[] {
  return dataProfessores;
}

export function getTotalTeachers(): number {
  return dataProfessores.length;
}

export function getAllActivities(): Atividade[] {
  return dataAtividades;
}

export function getTotalActivities(): number {
  return dataAtividades.length;
}