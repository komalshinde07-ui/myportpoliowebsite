import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';



const routes: Routes = [
  {path:"Home",component:HeaderComponent},
  {path:"Portfolio",component:PortfolioComponent},
  {path:"Resume",component:ResumeComponent},
  {path:"Contact",component:ContactComponent},
  {path:"**",component:HeaderComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
