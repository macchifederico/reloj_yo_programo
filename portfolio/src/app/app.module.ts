import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { interceptorProvider } from './services/interceptor-service';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { DeleteExperienciaComponent } from './components/experiencia/delete-experiencia.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';
import { NuevaAcercadeComponent } from './components/acercade/nueva-acercade.component';
import { EditarAcercadeComponent } from './components/acercade/editar-acercade.component';
import { EditarHeaderComponent } from './components/header/editar-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NuevoSkillComponent } from './components/skills/nuevo-skill.component';
import { EditarSkillComponent } from './components/skills/editar-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AcercadeComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    PortfolioComponent,
    ExperienciaComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    DeleteExperienciaComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    NuevaAcercadeComponent,
    EditarAcercadeComponent,
    EditarHeaderComponent,
    FooterComponent,
    NuevoSkillComponent,
    EditarSkillComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
