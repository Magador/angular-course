import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../../../shared/models/client.model';
import { TableButton } from '../../../shared/interfaces/table-button';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  public clients: ClientModel[];
  public headers: string[];
  public tableButton: TableButton;

  constructor(private clientService: ClientService) {
    this.clients = clientService.collection;
    this.headers = ['Name', 'Email', 'Telephone Number', 'Contact', 'State'];
    this.tableButton = {
      route: 'add',
      icon: faPlusCircle,
      label: 'Add client'
    };
  }

  ngOnInit() {}
}
