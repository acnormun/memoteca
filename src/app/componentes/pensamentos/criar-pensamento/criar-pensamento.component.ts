import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  pensamento = {
    id:'',
    conteudo:'',
    autoria: '',
    modelo:''
  }

  criarPensamento(){
    alert('aloooo')
  }

  cancelar(){
    
  }



}
