import { Component, OnInit } from '@angular/core';
import { Acercade } from 'src/app/models/Acercade';
import { AcercadeService } from 'src/app/services/acercade.service'
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  constructor(private sAcerca : AcercadeService, private tokenService: TokenService) { }
  
  isLogged = false;
  acercade: Acercade[] = [];

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
      
    }
  }

  cargarPersona(): void{
    this.sAcerca.lista().subscribe( 
      data => {this.acercade = data;
      })
  }

  delete(id?: number){
    if(id != null){
      this.sAcerca.delete(id).subscribe(
        data => {
          alert("Experiencia borrada con éxito");
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
    
  }

  
}
