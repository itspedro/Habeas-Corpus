import { Aluno } from '@/types/Aluno';
import { Professor } from '@/types/Professor';
import { dataAlunos } from './data/alunos';
import { dataProfessores } from './data/professores';
import { dataAtividades } from './data/atividades';
import { dataTurmas } from './data/turmas';
import UnidadeService from './data/unidade';
import { Atividade } from '@/types/Atividade';
import { Turma } from '@/types/Turma';
import { formatDate } from './dayjs';
import { Unidade } from '@/types/Unidade';


export function getLatestStudents(): Aluno[] {
  return dataAlunos.slice(dataAlunos.length - 10, dataAlunos.length).reverse();
}

export function cadastrarAluno(data: object): void {
  addStudent({...data,
    cod_matricula: new Date().getTime().toString(),
    status: true, 
    data: new Date().toLocaleDateString(),
    cod_mensalidade: (new Date().getTime() + 1).toString(),
    data_vencimento: new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleDateString(),
  } as Aluno);
}

export function desligarAluno(cod: string, motivo?: string): void {
  const aluno = getStudentById(cod);
  if (aluno) {
    aluno.motivo_cancelamento = motivo;
    aluno.data_cancelamento = formatDate(new Date().toLocaleDateString());
    aluno.status = false;
  }
}

export function getStudentById(id: string): Aluno | undefined {
  return dataAlunos.find(aluno => aluno.cod_matricula === id);
}


export function addStudent(aluno: Aluno): void {
  dataAlunos.push(aluno);
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

export function desligarProfessor(cref: string): void {
  const professor = getTeacherByCref(cref);
  if (professor) {
    professor.data_termino = formatDate(new Date().toLocaleDateString());
    professor.status = false;
  }
}

export function getTeacherByCref(cref: string): Professor | undefined {
  return dataProfessores.find(professor => professor.cref === cref);
}

export function addTeacher(professor: Professor): void {
  dataProfessores.push(professor);
}

export function cadastrarProfessor(data: object): void {
  addTeacher({...data,
    data_inicio: formatDate(new Date().toLocaleDateString()),
    status: true,
  } as Professor);
}


export function getAllActivities(): Atividade[] {
  return dataAtividades;
}

export function getTotalActivities(): number {
  return dataAtividades.length;
}

export function addActivity(atividade: Atividade): void {
  dataAtividades.push(atividade);
}

export function cadastrarAtividade(data: object): void {
  addActivity({...data,
    codAtividade: new Date().getTime().toString(),
  } as Atividade);
}

export function getAllClasses(): Turma[] {
  return dataTurmas;
}

export function getTotalClasses(): number {
  return dataTurmas.length;
}

export function cadastrarTurma(data: object): void {
  addClass({...data,
    codTurma: new Date().getTime().toString(),
  } as Turma);
}

export function addClass(turma: Turma): void {
  dataTurmas.push(turma);
}

export function getUnit(): Unidade {
  return UnidadeService.getUnidade();
}

export function updateUnit(data: object): void {
  UnidadeService.updateUnidade({...data} as Unidade);
}