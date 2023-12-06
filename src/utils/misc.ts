import { Aluno } from '@/types/Aluno';
import { Professor } from '@/types/Professor';
import dataAlunos from './data/alunos.json';
import dataProfessores from './data/professores.json';
import dataAtividades from './data/atividades.json';
import dataTurmas from './data/turmas.json';
import { Atividade } from '@/types/Atividade';
import { Turma } from '@/types/Turma';

let latestsStudents: Aluno[] = [];

export function getLatestStudents(): Aluno[] {
  return latestsStudents = dataAlunos.slice(0, 10);
}

export function addStudent(aluno: Aluno): void {
  latestsStudents.unshift(aluno);
  if (latestsStudents.length > 10) {
    latestsStudents.pop();
  }
}

export function getStudentById(id: string): Aluno | undefined {
  return dataAlunos.find(aluno => aluno.cod_matricula === id);
}


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

export function getAllClasses(): Turma[] {
  return dataTurmas;
}

export function getTotalClasses(): number {
  return dataTurmas.length;
}