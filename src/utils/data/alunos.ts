import { Aluno } from "@/types/Aluno";

export let dataAlunos: Aluno[] = [];

class AlunoService {
  getAluno(): Aluno[] {
    return dataAlunos;
  }

  setAluno(prof: Aluno): void {
    dataAlunos.push(prof);
  }

  updateAluno(nAluno: Aluno): void {
    dataAlunos = dataAlunos.map((aluno) => {
      if (aluno.cod_matricula === nAluno.cod_matricula) {
        return nAluno;
      }
      return aluno;
    });
  }

  deleteAluno(matricula: string): void {
    dataAlunos = dataAlunos.filter((aluno) => aluno.cod_matricula !== matricula);
  }

  getAlunoByMatricula(matricula: string): Aluno | undefined {
    return dataAlunos.find((aluno) => aluno.cod_matricula === matricula);
  }

  getAlunoByCPF(cpf: string): Aluno | undefined {
    return dataAlunos.find((aluno) => aluno.cpf === cpf);
  }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AlunoService();