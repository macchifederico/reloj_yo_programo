import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpLaboral } from 'src/app/models/ExpLaboral';
import { ExplaboralService } from 'src/app/services/explaboral.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {


  constructor(private sExp: ExplaboralService, private tokenService: TokenService, private router: Router) { }

  isLogged = false;
  expLaboral: ExpLaboral[] = [];

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
      
    }
  }

  cargarExperiencia(): void{
    this.sExp.lista().subscribe( 
      data => {this.expLaboral = data;
      })
  }

  delete(id?: number){
    if(id != null){
      this.sExp.delete(id).subscribe(
        data => {
          this.router.navigate(['portfolio']);
          window.location.reload();
        }, err => {
          window.location.reload();

        }
      )
    }
    
  }
  
}
