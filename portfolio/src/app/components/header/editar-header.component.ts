import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acercade } from 'src/app/models/Acercade';
import { Persona } from 'src/app/models/Persona';
import { AcercadeService } from 'src/app/services/acercade.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editar-header',
  templateUrl: './editar-header.component.html',
  styleUrls: ['./editar-header.component.css']
})
export class EditarHeaderComponent implements OnInit {

  constructor(private sPersona: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  persona : Persona = null;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err =>{
        alert("Error");
        this.router.navigate(['portfolio']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
   
    this.sPersona.update(id, this.persona).subscribe(
      data => {
        console.log(this.persona)
        this.router.navigate(['portfolio']);
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['portfolio']);
      }
    )
  }
}
