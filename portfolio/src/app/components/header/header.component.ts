import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sPersona : PersonaService, private tokenService: TokenService, private activatedRoute : ActivatedRoute) { }

  persona: Persona[] = [];
  isLogged = false;
  urlLinkedin = "https://www.linkedin.com/in/federico-macchi-50572525";

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sPersona.lista().subscribe( 
      data => {this.persona = data;
      })
  }
}