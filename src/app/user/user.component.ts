import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
taskList:any;
searchStatus:any=''
  constructor ( private userServ : UserService) { }
  ngOnInit(): void {
    // this is used to get task data for cards
    this.taskList=this.userServ.getTaskList()
    console.log(this.taskList)

  }

  // this method used for task completed by user 
  statuForLeave(task:any,val:any){
task.status=val;
  }

}
