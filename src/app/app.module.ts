import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//pages
import { AppComponent } from './app.component';
import { TopBarComponent } from './common/top-bar/top-bar.component';
import { SearchesComponent } from './searches/searches.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { HomeComponent } from './home/home.component';

//services
import { MaterialModule } from './services/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SearchesComponent,
    SearchDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
