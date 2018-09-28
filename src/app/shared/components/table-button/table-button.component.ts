import { Component, OnInit, Input } from '@angular/core';
import { TableButton } from '../../interfaces/table-button';

@Component({
  selector: 'app-table-button',
  templateUrl: './table-button.component.html',
  styleUrls: ['./table-button.component.scss']
})
export class TableButtonComponent implements OnInit {
  @Input()
  public tableButton: TableButton;

  constructor() {}

  ngOnInit() {}
}
