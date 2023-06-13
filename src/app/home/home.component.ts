import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/service/user.service';
import { TaskModel } from '../shared/model/task.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  dataSource:any|TaskModel;
  data:any;
  searchStatus:string|any='';
  public addTask:FormGroup|any; 
  constructor(private userServ : UserService , private fb:FormBuilder ) { }

  ngOnInit(): void {
    // this is for add new task form 
    this.getTaskList()
    this.addTask=this.fb.group({
      taskTitle: this.fb.control('',Validators.required),
      duedate: this.fb.control('',Validators.required),
      status: this.fb.control('pending',Validators.required)
    })
  
  }
  // get data for table 
  getTaskList(){
    this.dataSource=this.userServ.getTaskList()
  }
  // add new task in table 
  addTaskToList(){
    this.userServ.addNewTaskInList(this.addTask.value)
    this.getTaskList()
  }

}
