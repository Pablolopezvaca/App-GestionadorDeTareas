import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

// Se puede cambiar de Standalone y componentes basados en módulos
// Standalone tambien puede usar módulos, no solo se puede añadir Standalone a módulos sino también visceversa, revisar new-task.component

@NgModule({
  // Array de declaraciones para componentes no Standalone
  declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
  ],
  // Array de importaciones para componentes autónomos Standalone
  imports: [
    BrowserModule,
    //AppRoutingModule,
    //FormsModule, 
    SharedModule, // Módulos anidados
    TasksModule,  // Módulos anidados
],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
