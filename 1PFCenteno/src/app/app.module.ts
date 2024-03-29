import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { StudentsComponent } from './components/students/students.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AppMaterialModule } from  './app.material.module';
import { ReactiveFormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';
import { NamelastnamePipe } from './pipes/namelastname.pipe';
import { Setsize20Directive } from './directives/setsize20.directive';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    MainComponent,
    CoursesComponent,
    StudentsComponent,
    EditarDialogComponent,
    CreateDialogComponent,
    NamelastnamePipe,
    Setsize20Directive
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
