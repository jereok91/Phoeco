import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/list',
      icon: 'person'
    },
    {
      title: 'Noticias(novedades)',
      url: '/list',
      icon: 'today'
    },
     {
      title: 'Informacion del Lago',
      url: '/list',
      icon: 'book'
    }, 
    {
      title: '¿Cómo llegar?',
      url: '/list',
      icon: 'locate'
    },
     {
      title: 'Calendario de eventos',
      url: '/list',
      icon: 'Calendar'
    },
     {
      title: 'Bonos por juegos ecológicos',
      url: '/list',
      icon: 'ribbon'
    },
    {
      title: 'Configuración',
      url: '/list',
      icon: 'build'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
