import { Professor } from './../types/Professor';
import { Aluno } from '@/types/Aluno';
import AlunoService from './data/alunos';
import ProfessorService from './data/professores';
import AtividadeService from './data/atividades';
import TurmaService from './data/turmas';
import UnidadeService from './data/unidade';
import { Atividade } from '@/types/Atividade';
import { Turma } from '@/types/Turma';
import { formatDate } from './dayjs';
import { Unidade } from '@/types/Unidade';


export function getLatestStudents(): Aluno[] {
  return AlunoService.getAluno().slice(getTotalStudents() - 10, getTotalStudents()).reverse();
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
  return AlunoService.getAlunoByMatricula(id);
}

export function getStudentByCPF(cpf: string): Aluno | undefined {
  return AlunoService.getAlunoByCPF(cpf);
}

export function addStudent(aluno: Aluno): void {
  AlunoService.setAluno(aluno);
}

export function getAllStudents(): Aluno[] {
  return AlunoService.getAluno();
}

export function getTotalStudents(): number {
  return AlunoService.getAluno().length;
}

export function getAllTeachers(): Professor[] {
  return ProfessorService.getProfessor();
}

export function getTotalTeachers(): number {
  return ProfessorService.getProfessor().length;
}

export function desligarProfessor(cref: string): void {
  const professor = getTeacherByCref(cref);
  if (professor) {
    professor.data_termino = formatDate(new Date().toLocaleDateString());
    professor.status = false;
  }
}

export function getTeacherByCref(cref: string): Professor | undefined {
  return ProfessorService.getProfessorByCref(cref);
}

export function cadastrarProfessor(data: object): void {
  addTeacher({...data,
    data_inicio: formatDate(new Date().toLocaleDateString()),
    status: true,
  } as Professor);
}

export function addTeacher(professor: Professor): void {
  ProfessorService.setProfessor(professor);
}

export function getAllActivities(): Atividade[] {
  return AtividadeService.getAtividade();
}

export function getTotalActivities(): number {
  return AtividadeService.getAtividade().length;
}

export function cadastrarAtividade(data: object): void {
  addActivity({...data,
    codAtividade: new Date().getTime().toString(),
  } as Atividade);
}

export function addActivity(atividade: Atividade): void {
  AtividadeService.setAtividade(atividade);
}

export function getAllClasses(): Turma[] {
  return TurmaService.getTurma();
}

export function getTotalClasses(): number {
  return TurmaService.getTurma().length;
}

export function cadastrarTurma(data: object): void {
  addClass({...data,
    codTurma: new Date().getTime().toString(),
  } as Turma);
}

export function addClass(turma: Turma): void {
  TurmaService.setTurma(turma);
}

export function getUnit(): Unidade {
  return UnidadeService.getUnidade();
}

export function updateUnit(data: object): void {
  UnidadeService.updateUnidade({...data} as Unidade);
}