import { Component } from '@angular/core';
import { Column, TableComponent } from '../../components/table/table.component';


@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {
  columns: Column[] = [
    { field: 'name', }, 
    { field: 'duration', },
    { field: 'active', },
  ];

}