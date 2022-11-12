import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { CharacterPageComponent } from './page/character-page/character-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {CalendarModule} from 'primeng/calendar';
import {KnobModule} from 'primeng/knob';
import {MultiSelectModule} from 'primeng/multiselect';










@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharacterPageComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    ContactPageComponent,
    PaginationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    AccordionModule,
    CalendarModule,
    FormsModule,
    KnobModule,
    MultiSelectModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
