import { Unidade } from "@/types/Unidade";

let dataUnidade: Unidade = {
  "cnpj": "12.345.678/0001-91",
  "nome": "Unidade asdfghjkl",
  "razaoSocial": "Unidade asdfghjkl LTDA.",
  "endereco": "Rua dos Bobos, 0",
  "bairro": "Centro",
  "cep": "12345000",
  "telefone": "1212341234",
  "email": "asdfghjkl@habeascorpus.com"
}

class UnidadeService {
  getUnidade(): Unidade {
    return dataUnidade;
  }

  setUnidade(unidade: Unidade): void {
    dataUnidade = unidade;
  }

  updateUnidade(unidade: Unidade): void {
    dataUnidade = unidade;
  }

  deleteUnidade(): void {
    dataUnidade = {} as Unidade;
  }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UnidadeService();