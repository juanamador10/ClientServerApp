import { Component, OnInit } from '@angular/core';
import { UserResult2 } from 'src/app/interfaces/user2';
import { Users2Service } from 'src/app/services/users2.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private user2Service: Users2Service) { }
  users2!: UserResult2;

  ngOnInit(): void {
    this.user2Service.getUsers().subscribe((result:UserResult2) => {
      this.users2 = result,
      console.log(result)

    },(error:any) => {
      console.log(error)
    })
  }

}
