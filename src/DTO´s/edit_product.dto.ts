export class EditProductDto {
  readonly productId:string;
  readonly donatorId:string;
  readonly nome_produto?: string;
  readonly quantidade_por_caixa?:number;
  readonly quantidade_de_caixas?:number;
  readonly validade?:string;

}