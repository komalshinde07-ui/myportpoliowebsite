import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { project } from '../_Models/Project';
import { Tag } from '../_Models/tag';
import { ProjectsService } from '../_Services/projects.service';
import { DialogAppComponent } from '../dialog-app/dialog-app.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {


  projects={} as project[] ;
  constructor(private titelService:Title,private projectservice:ProjectsService, public dialog: MatDialog ){
    this.titelService.setTitle('komal shinde-Portfolio')

  }
  ngOnInit(): void {
    this.projects=this.projectservice.GetProjects();
  }




  
}
