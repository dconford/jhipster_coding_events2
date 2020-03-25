import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterCodingEvents2SharedModule } from 'app/shared/shared.module';
import { JhipsterCodingEvents2CoreModule } from 'app/core/core.module';
import { JhipsterCodingEvents2AppRoutingModule } from './app-routing.module';
import { JhipsterCodingEvents2HomeModule } from './home/home.module';
import { JhipsterCodingEvents2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterCodingEvents2SharedModule,
    JhipsterCodingEvents2CoreModule,
    JhipsterCodingEvents2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterCodingEvents2EntityModule,
    JhipsterCodingEvents2AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterCodingEvents2AppModule {}
