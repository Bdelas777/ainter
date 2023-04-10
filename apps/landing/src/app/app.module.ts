import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ImagesComponent } from './components/images/images.component';
import { DescriptionComponent } from './components/description/description.component';
import { LevelComponent } from './components/level/level.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    ImagesComponent,
    DescriptionComponent,
    LevelComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
