import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { TableButton } from '../../interfaces/table-button';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {
  @Input()
  public headers: string[];

  constructor() {}

  ngOnInit() {}
}
