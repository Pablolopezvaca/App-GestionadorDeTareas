import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
// import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  //imports: [TaskComponent, NgFor, NgIf, NewTaskComponent], // Solo se usa cuando Standalone esta en true
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],  
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string; 
  isAddingTask = false;
  // private tasksService = TasksService;
  // @Input({ required: true }) name!: string;

  constructor(private tasksService: TasksService) { 
  }


  get selectedUserTasks(){
    return this.tasksService.getUserTask(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }
}
