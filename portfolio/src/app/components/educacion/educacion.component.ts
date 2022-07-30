import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private tokenService: TokenService, private sEdu: EducacionService) { }

  isLogged: boolean;
  educacion: Educacion[] = [];

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.sEdu.lista().subscribe( data => {this.educacion = data;})
    
  }

  delete(id?: number){
    if(id != null){
      this.sEdu.delete(id).subscribe(
        data => {
          window.location.reload();
        }, err => {
          alert("Educacion borrada con éxito");
          window.location.reload();
        }
      )
    }
  }
}
