import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { OdevKayitComponent } from './components/odev-kayit/odev-kayit.component';
import { GuncelOdevComponent } from './components/guncel-odev/guncel-odev.component';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { NavComponent } from './components/nav/nav.component';
import { KayitOlComponent } from './components/kayit-ol/kayit-ol.component';
import { FormsModule } from '@angular/forms';
import { GirisYapComponent } from './components/giris-yap/giris-yap.component';
import { FooterComponent } from './components/footer/footer.component';
// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    OdevKayitComponent,
    GuncelOdevComponent,
    HakkimizdaComponent,
    IletisimComponent,
    NavComponent,
    KayitOlComponent,
    GirisYapComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
