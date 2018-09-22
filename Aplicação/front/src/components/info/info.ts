import { Component } from '@angular/core';

/**
 * Generated class for the InfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'info',
  templateUrl: 'info.html'
})
export class InfoComponent {

  private data: Object = {
    trocas: 10,
    ofertasRecebidas: 15,
    ofertasRealizadas: 10,
    produtos: 8,
    nota: 8.5
  };

  constructor() {}

}
