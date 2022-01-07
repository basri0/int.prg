import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sonuc } from 'src/app/models/sonuc';

@Component({
  selector: 'app-giris-yap',
  templateUrl: './giris-yap.component.html',
  styleUrls: ['./giris-yap.component.css'],
})
export class GirisYapComponent implements OnInit {
  sonuc: Sonuc = new Sonuc();
  constructor(
    //public fbServis: FbservisService2,
    private UserService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}
  GirisYap(mail: string, parola: string) {
    this.UserService.getAllUsers()
      .snapshotChanges()
      .subscribe((lu) => {
        let user = lu.find((u) => {
          let user = { key: u.payload.key, ...u.payload.val() };
          return (
            user.mail.toLocaleLowerCase() == mail.toLocaleLowerCase() &&
            user.parola == parola
          );
        });
        
        if (user != null) {
          let u = { key: user.payload.key, ...user.payload.val() };
          localStorage.setItem('user', JSON.stringify(u));
          this.router.navigate(['/']);
        } else {
          this.sonuc.islem = false;
          this.sonuc.mesaj = 'E-Posta Adresi veya Parola Geçersizdir!';
        }
      });
  }
}
