import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainComponent } from './components/main/main.component';
import { AppMaterialModule } from './app.material.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule
    // AlumnosModule,
    // CursosModule,
    // InscripcionesModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
