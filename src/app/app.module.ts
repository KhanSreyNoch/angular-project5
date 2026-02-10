import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImformationFirstComponent } from './imformation-first/imformation-first.component';
import { ImformationTwoComponent } from './imformation-two/imformation-two.component';
import { ImformationThreeComponent } from './imformation-three/imformation-three.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollComponent } from './share/scroll/scroll.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
const components = [
  HeaderComponent,
  HomePageComponent,
  ImformationFirstComponent,
  ImformationTwoComponent,
  ImformationThreeComponent,
  FooterComponent,
  ScrollComponent,
  LayoutPageComponent,
];
@NgModule({
  declarations: [AppComponent, components],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [components],
})
export class AppModule {}
