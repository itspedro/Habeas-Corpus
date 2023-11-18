export type Mensalidade = {
  codMensalidade: string,
  dataVencimento: string,
  valor: string,
  acrescimo?: string,
  dataPgto?: string,
  valorPgto?: string,
}