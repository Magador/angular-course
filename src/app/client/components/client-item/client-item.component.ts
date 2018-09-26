import { Component, OnInit, Input } from '@angular/core';
import { ClientModel } from '../../../shared/models/client.model';
import { ClientState } from '../../../shared/enums/client-state.enum';
import { ClientService } from '../../services/client.service';

@Component({
  selector: '[app-client-item], app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss']
})
export class ClientItemComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('app-client-item')
  public client: ClientModel;
  public clientStates = Object.values(ClientState);

  constructor(private clientService: ClientService) {}

  ngOnInit() {}

  public onChangeState(e) {
    this.clientService.updateClientState(this.client, e.target.value);
  }
}
