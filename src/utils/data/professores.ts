import { Professor } from "@/types/Professor";

let dataProfessores: Professor[] = [];

class ProfessorService {
  getProfessor(): Professor[] {
    return dataProfessores;
  }

  setProfessor(prof: Professor): void {
    dataProfessores.push(prof);
  }

  updateProfessor(nProfessor: Professor): void {
    dataProfessores = dataProfessores.map((prof) => {
      if (prof.cref === nProfessor.cref) {
        return nProfessor;
      }
      return prof;
    });
  }

  deleteProfessor(cref: string): void {
    dataProfessores = dataProfessores.filter((prof) => prof.cref !== cref);
  }

  getProfessorByCref(cref: string): Professor | undefined {
    return dataProfessores.find((prof) => prof.cref === cref);
  }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProfessorService();