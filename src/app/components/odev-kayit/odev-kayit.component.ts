import { OdevService } from './../../services/odev.service';
import { Component, OnInit } from '@angular/core';
import { Kayit } from 'src/app/models/kayit';
import { Sonuc } from 'src/app/models/sonuc';

@Component({
  selector: 'app-odev-kayit',
  templateUrl: './odev-kayit.component.html',
  styleUrls: ['./odev-kayit.component.css'],
})
export class OdevKayitComponent implements OnInit {
  kayitlar: Kayit[];
  secKayit: Kayit = new Kayit();
  sonuc: Sonuc = new Sonuc();
  constructor(
    private odevService: OdevService
  )
  {
  }
  dataLoaded=false
  ngOnInit() {
    this.KayitListele();
    this.secKayit.key = null;
  }
  KayitListele() {
    this.odevService.KayitListele().snapshotChanges().subscribe(k=>{
      this.kayitlar = k.map(x=>({ key: x.payload.key, ...x.payload.val() }))
      this.dataLoaded=true
    });
  }
  KayitDuzenle(kayit: Kayit) {
    Object.assign(this.secKayit, kayit);
    console.log("düzen",kayit)
    console.log(this.secKayit)
  }
  KayitSil(kayit: Kayit) {
    this.odevService.KayitSil(kayit.key);
    this.KayitListele()
    this.sonuc.islem = true;
    this.sonuc.mesaj = 'Kayıt Silindi';
  }
  Kaydet() {
    var tarih = new Date();
    this.secKayit.duzTarih = tarih.getTime().toString();

    if (this.secKayit.key == null) {
      this.secKayit.kayTarih = tarih.getTime().toString();
      this.odevService.KayitEkle(this.secKayit);
      this.sonuc.islem = true;
      this.sonuc.mesaj = 'Kayıt Eklendi';
    } else {
      this.odevService.KayitDuzenle(this.secKayit);
      this.sonuc.islem = true;
      this.sonuc.mesaj = 'Kayıt Düzenlendi';
    }
    console.log(this.secKayit)
    this.Vazgec()
  }
  Vazgec() {
    this.secKayit = new Kayit();
    this.secKayit.key = null;
  }
}
