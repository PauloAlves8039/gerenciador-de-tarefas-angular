/**
 * @file: tarefa.model.ts
 * @author: Paulo Alves
 * @description: representa o modelo de entidade tarefa.
 * @version 1.0.0 (25/08/2020)
 */

export class Tarefa {
  constructor(
    public id?: number,
    public nome?: string,
    public concluida?: boolean){}
}
