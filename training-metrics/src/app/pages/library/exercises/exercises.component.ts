import { Component } from '@angular/core';
import { Column, TableComponent } from '../../../components/table/table.component';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss'
})
export class ExercisesComponent {
  columns: Column[] = [
    { field: 'name', }, 
    { field: 'duration', },
    { field: 'active', },
  ];
}
