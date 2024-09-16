import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { project } from '../_Models/Project';
import { ProjectsService } from '../_Services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredProject: any;

  constructor(private titelService:Title,private projectservice:ProjectsService){
    this.titelService.setTitle('komal shinde-Home')

  }
  ngOnInit(): void {
    this.featuredProject=this.projectservice.GetprojectByid(0);
  }
}
