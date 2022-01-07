import { GirisYapComponent } from './components/giris-yap/giris-yap.component';
import { KayitOlComponent } from './components/kayit-ol/kayit-ol.component';
import { GuncelOdevComponent } from './components/guncel-odev/guncel-odev.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';
import { OdevKayitComponent } from './components/odev-kayit/odev-kayit.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'guncelodev',
    component: GuncelOdevComponent,
  },
  {
    path: 'hakkimizda',
    component: HakkimizdaComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'iletisim',
    component: IletisimComponent,
  },
  {
    path: 'odevkayit',
    component: OdevKayitComponent,
  },{
    path:"kayitol",component:KayitOlComponent
  },{
    path:"giris",component:GirisYapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
