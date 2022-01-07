import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  girildimi:boolean
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.girildimi=this.userService.girisYapmismi()
  }
  cikis(){
    localStorage.removeItem("user")
    window.location.reload()
  }

}
