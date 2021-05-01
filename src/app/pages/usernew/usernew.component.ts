import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from 'src/app/services/users.service';
import { Usersmodel } from '../../interfaces/user.interfaces';

//ng g c pages/usernew --skipTests
@Component({
  selector: 'app-usernew',
  templateUrl: './usernew.component.html',
})
export class UsernewComponent implements OnInit {
  publishers = [
    { User: 'DC Comics', Password: 'DC - Comics' },
    { User: 'Marvel Comics', dPasswordesc: 'Marvel - Comics' },
  ];
  heroe: Usersmodel = {
    User: '',
    Password: '',
    IdUser: '',
  };
  constructor(
    private heroesService: PaisService,
    private aActivatedRoute: ActivatedRoute,
    private router: Router //private snackBar: MatSnackBar, //public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }
    this.aActivatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroePorId(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  guardar() {
    console.log('enviando ', this.heroe);
    this.heroesService.agregarHeroe(this.heroe).subscribe((heroe) => {
      console.log('Respueta', heroe);
      //this.router.navigate(['/heroes/editar', heroe.IdUser]);
      this.router.navigate(['crudusers']);
      console.log('registro creado');
    });
  }
}
