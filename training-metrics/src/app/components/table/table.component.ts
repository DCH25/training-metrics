import { Component, input, Input, InputSignal } from '@angular/core';

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
  columns = input.required<Column[]>();
  title = input<string>("");

}
