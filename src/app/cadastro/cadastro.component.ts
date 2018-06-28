import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent();
  mensagem = new MensagemComponent();

  constructor(private servico: FotoService) { }

  ngOnInit() {
  }

  salvar(submit: Event) {
    this.servico.cadastrar(this.foto)
    .subscribe(
      () => {
        this.mensagem.texto = `${this.foto.titulo} cadastrada com sucesso`;
        this.mensagem.tipo = 'success';
      }
      , erro => {
        this.mensagem.texto = `Ops algo deu errado`;
        this.mensagem.tipo = 'danger';
        console.log(erro);
    );

    console.log('salvou!!!');
  }

}
