import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { SumarComponent } from './pages/sumar/sumar.component';
import { ParOImparComponent } from './pages/par-oimpar/par-oimpar.component';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { YearBisiestoComponent } from './pages/year-bisiesto/year-bisiesto.component';
import { PotenciaComponent } from './pages/potencia/potencia.component';
import { CicloForComponent } from './pages/ciclo-for/ciclo-for.component';
import { CrudUserComponent } from './pages/crud-user/crud-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UsernewComponent } from './pages/usernew/usernew.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SumarComponent,
    ParOImparComponent,
    YearBisiestoComponent,
    PotenciaComponent,
    CicloForComponent,
    CrudUserComponent,
    UsernewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  exports: [SidebarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
