import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from 'src/app/services/users.service';
import { Usersmodel } from 'src/app/interfaces/user.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styles: [],
})
export class CrudUserComponent implements OnInit {
  //private apiUrl: string = '/?api=users'; //name/united
  usuarios: Usersmodel[] = [];
  termino: string = 'Hola mundo2';
  hayError: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: PaisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.heroesService.getUsers().subscribe(
      (paises) => {
        this.usuarios = paises;
        console.log(paises);
      },
      (err) => (this.usuarios = [])
    );
  }

  borrarHeroe(Id: number) {
    this.heroesService.borrarHeroe(Id).subscribe((resp) => {
      //this.router.navigate(['crudusers']);
      window.location.reload();
    });
  }
}
