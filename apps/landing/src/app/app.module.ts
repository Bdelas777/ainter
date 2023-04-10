import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { DescriptionComponent } from './components/description/description.component';
import { LevelComponent } from './components/level/level.component';
//MOdulos
import { LayoutModule } from './layout/layout.module';
import { TopicsComponent } from './components/topics/topics.component';
import { ImagesComponent } from './components/images/images.component';

@NgModule({
  declarations: [
    DescriptionComponent,
    LevelComponent,
    TopicsComponent,
    ImagesComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
