import { Component, inject, Input, } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: false,
  //imports: [CardComponent, DatePipe],  // Solo se usa cuando Standalone esta en true
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksServcie = inject(TasksService);

  onCompleteTask(){
    this.tasksServcie.removeTask(this.task.id);
  }
}
