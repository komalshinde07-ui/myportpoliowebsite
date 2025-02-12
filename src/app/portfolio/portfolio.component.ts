import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { project } from '../_Models/Project';
import { Tag } from '../_Models/tag';
import { ProjectsService } from '../_Services/projects.service';
import { DialogAppComponent } from '../dialog-app/dialog-app.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Highcharts from 'highcharts';
//import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  skills = [
    { name: 'Angular', checked: true },
    { name: 'TypeScript', checked: true },
    { name: 'JavaScript', checked: true },
    { name: 'HTML', checked: true },
    { name: 'CSS', checked: true },
   
  ];
  Highcharts = Highcharts; 
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',  // Overall chart type
      
    },
    title: {
       text: 'Performance in Technologies'
    },

    xAxis: {
      categories: ['Angular', 'Typescript', 'Javascript', 'HTML', 'css'],
      title: {
        text: 'Technologies'
      }},
      yAxis: {
        min: 0,
        title: {
          text: 'Percentage'
        }
      },
  
   

    series: [
      {
        type:'bar',
        name: 'Usage (%)',
        data: [70, 80, 40, 50, 50],
        color: 'rgb(140, 112, 165)'
      },
      // {
      //   type:'bar',
      //   name: 'Satisfaction (%)',
      //   data: [80, 70, 60, 55, 50],
      //   color: '#FF9800'
      // }
    ]
  };
 

  projects={} as project[] ;
  constructor(private titelService:Title,private projectservice:ProjectsService, public dialog: MatDialog ){
    this.titelService.setTitle('komal shinde-Portfolio')

  }
  ngOnInit(): void {
    this.projects=this.projectservice.GetProjects();
  }




  
}
