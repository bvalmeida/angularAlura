import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'appNovaTransferencia',
    templateUrl: './novaTransferencia.component.html',
    styleUrls: ['./novaTransferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino:number = 0;

  transferir(){
    console.log('Solicitado nova transferência');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
  }
}
