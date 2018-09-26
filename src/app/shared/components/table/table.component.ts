import { Component, OnInit, Input } from '@angular/core';

import { TableButton } from '../../interfaces/table-button';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  public headers: string[];

  constructor() {}

  ngOnInit() {}
}
