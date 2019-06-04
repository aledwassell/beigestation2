import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {HttpClientModule } from '@angular/common/http';
import {YoutubePlayerModule } from "./modules/youtube-player/youtube-player.module";
import { ServerConnectorService } from './services/server-connector.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { VideoItemComponent } from './components/main/video-item/video-item.component';
import {AppRouterModule} from './modules/router/router.module';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/main/shop/shop.component';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    YoutubePlayerModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    AppRouterModule,
  ],
  declarations: [ AppComponent, HelloComponent, FooterComponent, MainComponent, NavigationComponent, VideoItemComponent, AboutComponent, ShopComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServerConnectorService]
})
export class AppModule { }
