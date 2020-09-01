/**
 * @file: listar-tarefa.component.ts
 * @author: Paulo Alves
 * @description: responsável pela listagem e outras funcionalidades referentes as tarefas.
 * @version 1.0.1 (27/08/2020)
 */

import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from './../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  /**
   * Lista todas as tarefas.
   */
  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  /**
   * Remove uma tarefa.
   */
  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  /**
   * Altera o estado da tarefa.
   */
  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}
