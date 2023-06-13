import { Injectable } from '@angular/core';
import { TaskModel} from '../model/task.model'
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  private taskList=[
    new TaskModel(' cooling issu', '2023-06-15', 'pending'),
    new TaskModel('display not work', '2023-06-20', 'completed'),
    new TaskModel('faulty installation', '2023-06-28', 'pending'),
    new TaskModel('logged air filters', '2023-07-10', 'pending')
  ]
  // send all task data in component 
  getTaskList(){
    return this.taskList.slice()
  }

  // add new task in list 
  addNewTaskInList(task:any){
this.taskList.push(task)
  }
  
}
