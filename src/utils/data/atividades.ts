import { Atividade } from '@/types/Atividade';

let dataAtividades: Atividade[]  = [];

class AtividadeService {
  getAtividade(): Atividade[] {
    return dataAtividades;
  }

  setAtividade(ativ: Atividade): void {
    dataAtividades.push(ativ);
  }

  updateAtividade(nAtividade: Atividade): void {
    dataAtividades = dataAtividades.map((ativ) => {
      if (ativ.codAtividade === nAtividade.codAtividade) {
        return nAtividade;
      }
      return ativ;
    });
  }

  deleteAtividade(codAtividade: string): void {
    dataAtividades = dataAtividades.filter((ativ) => ativ.codAtividade !== codAtividade);
  }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AtividadeService();