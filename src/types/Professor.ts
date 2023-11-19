import { Pessoa } from './Pessoa';

export type Professor = Pessoa & {
  cref: string,
  remuneracao: string,
  data_inicio: string,
  data_termino: string,
  status: boolean,
}