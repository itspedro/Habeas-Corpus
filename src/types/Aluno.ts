import { Matricula } from "./Matricula";
import { Mensalidade } from "./Mensalidade";
import { Pessoa } from "./Pessoa";

export type Aluno = Pessoa & Matricula & Mensalidade & {
  status: boolean
};