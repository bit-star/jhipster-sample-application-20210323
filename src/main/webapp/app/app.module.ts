import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleApplication20210323SharedModule } from 'app/shared/shared.module';
import { JhipsterSampleApplication20210323CoreModule } from 'app/core/core.module';
import { JhipsterSampleApplication20210323AppRoutingModule } from './app-routing.module';
import { JhipsterSampleApplication20210323HomeModule } from './home/home.module';
import { JhipsterSampleApplication20210323EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleApplication20210323SharedModule,
    JhipsterSampleApplication20210323CoreModule,
    JhipsterSampleApplication20210323HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleApplication20210323EntityModule,
    JhipsterSampleApplication20210323AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterSampleApplication20210323AppModule {}
