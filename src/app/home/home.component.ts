import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { project } from '../_Models/Project';
import { ProjectsService } from '../_Services/projects.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredProject: any;


  setvalue: any;



  constructor(private titelService:Title,private projectservice:ProjectsService,private fb:FormBuilder){
    this.titelService.setTitle('komal shinde-Home')

  }
  ngOnInit(): void {
    this.featuredProject=this.projectservice.GetprojectByid(0);
   
 
  
 
  }
  onsubmit(e:any){
console.log(e)
  }

  onkey(event:any){
    const input =event.target.value;
    console.log(input)
    this.setvalue=100-input;
    console.log(this.setvalue)
   // this.myform.controls['secondvalue'].setValue(this.setvalue)

  }
}
