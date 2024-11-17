import { Component, Input } from '@angular/core';

export interface Column {
  field: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input({ required: true }) columns: Column[] = [];
  @Input() title: string = "";

}
