import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavbarHidden = true;

  constructor(private titelService:Title,private  renderer:Renderer2){
      this.titelService.setTitle('komal shinde-Resume')
  
    }
    Downloadfile(){
      const link=this.renderer.createElement('a');
      link.setAttribute('target','_blank');
      link.setAttribute('href','assets/Resume.pdf');
      link.setAttribute('download','Resume.pdf');
      
      link.click();
      link.remove();
    }

    showNavbar() {
      this.isNavbarHidden = false; // Show navbar when needed
    }

}
