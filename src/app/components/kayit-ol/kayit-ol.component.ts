import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
//import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Sonuc } from 'src/app/models/sonuc';
import { Uye } from 'src/app/models/uye';

@Component({
  selector: 'app-kayit-ol',
  templateUrl: './kayit-ol.component.html',
  styleUrls: ['./kayit-ol.component.css']
})
export class KayitOlComponent implements OnInit {

  sonuc: Sonuc = new Sonuc();
  secUye: Uye = new Uye();
  constructor(
    private userService:UserService,
    public router: Router
  ) { }
  ngOnInit() {
  }
  KayitYap() {
    this.userService.uyeOl(this.secUye).then(d => {
      localStorage.setItem("user", JSON.stringify(this.secUye));
      console.log(d.key)
      this.router.navigate(['/']);
    }, err => {
      console.log(err)
      this.sonuc.islem = false;
      this.sonuc.mesaj = "Hata Oluştu Tekrar Deneyiniz!";
    });
  }
 

 


}
