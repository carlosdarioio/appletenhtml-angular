import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usersmodel } from 'src/app/interfaces/user.interfaces';
import { PaisService } from '../../services/users.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
})
export class UsereditComponent implements OnInit {
  usuario: Usersmodel = {
    User: '',
    Password: '',
    IdUser: '',
  };
  constructor(
    private heroesService: PaisService,
    private aActivatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }
    this.aActivatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroePorId(id)))
      .subscribe((usuario) => (this.usuario = usuario));
  }

  editar() {
    console.log('enviando ', this.usuario);
    this.heroesService.actualizarUsuario(this.usuario).subscribe((usuario) => {
      console.log('Respueta', usuario);
      //this.router.navigate(['/heroes/editar', heroe.IdUser]);
      this.router.navigate(['crudusers']);
      console.log('registro creado');
    });
  }
}
