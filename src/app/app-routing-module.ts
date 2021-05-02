import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumarComponent } from './pages/sumar/sumar.component';
import { ParOImparComponent } from './pages/par-oimpar/par-oimpar.component';
import { YearBisiestoComponent } from './pages/year-bisiesto/year-bisiesto.component';
import { PotenciaComponent } from './pages/potencia/potencia.component';
import { CicloForComponent } from './pages/ciclo-for/ciclo-for.component';
import { CrudUserComponent } from './pages/crud-user/crud-user.component';
import { UsernewComponent } from './pages/usernew/usernew.component';
import { UsereditComponent } from './pages/useredit/useredit.component';

//añadiendo rutas padres
const routes: Routes = [
  {
    //Ejemplo de suma
    path: '',
    component: SumarComponent,
    pathMatch: 'full',
  },
  {
    //Par o Impar
    path: 'paroimpar',
    component: ParOImparComponent,
  },
  {
    path: 'bisiesto',
    component: YearBisiestoComponent,
  },
  {
    path: 'potencia',
    component: PotenciaComponent,
  },
  {
    path: 'for',
    component: CicloForComponent,
  },
  {
    path: 'crudusers',
    component: CrudUserComponent,
  },
  { path: 'agregar', component: UsernewComponent },
  { path: 'editar/:id', component: UsereditComponent },

  {
    //redirect 404/home por defecto
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
