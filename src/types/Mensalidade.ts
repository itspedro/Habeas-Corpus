export type Mensalidade = {
  cod_mensalidade: string,
  data_vencimento: string,
  valor: string,
  acrescimo?: string,
  dataPgto?: string,
  valorPgto?: string,
}