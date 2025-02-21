import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { IntroComponent } from './intro/intro.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {path:'intro',component:IntroComponent},
  {path:'about',component:AboutComponent},
  {path:'exp',component:ExperienceComponent},
  {path:'skill',component:SkillComponent},
  {path:'contact',component:ContactComponent},
  {path:'**', redirectTo: '/intro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
