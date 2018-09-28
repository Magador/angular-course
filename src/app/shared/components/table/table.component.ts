import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { PrestationService } from '../../../prestation/services/prestation.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {
  @Input()
  public headers: string[];
  public notification$: Subject<any>;

  constructor(private prestationService: PrestationService) {}

  ngOnInit() {
    this.notification$ = this.prestationService.notification$;
  }
}
