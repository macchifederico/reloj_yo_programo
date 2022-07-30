import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/models/Skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {

  constructor(private sSkill: SkillsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  skills : Skills;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.sSkill.detail(id).subscribe(
      data =>{
        this.skills = data;
      }, err =>{

      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sSkill.update(id, this.skills).subscribe(
      data => {
      }, err =>{
        this.router.navigate(['portfolio']);

      }
    )
  }

}
