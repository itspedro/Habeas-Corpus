import { Turma } from '@/types/Turma';

let dataTurmas: Turma[] = [];

class TurmaService {
  getTurma(): Turma[] {
    return dataTurmas;
  }

  setTurma(turma: Turma): void {
    dataTurmas.push(turma);
  }

  updateTurma(nTurma: Turma): void {
    dataTurmas = dataTurmas.map((turma) => {
      if (turma.codTurma === nTurma.codTurma) {
        return nTurma;
      }
      return turma;
    });
  }

  deleteTurma(codTurma: string): void {
    dataTurmas = dataTurmas.filter((turma) => turma.codTurma !== codTurma);
  }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TurmaService();