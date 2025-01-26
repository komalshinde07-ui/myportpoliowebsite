import { Component, Input, OnInit } from '@angular/core';
import { project } from '../_Models/Project';

import { ProjectModalViewComponent } from '../project-modal-view/project-modal-view.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogAppComponent } from '../dialog-app/dialog-app.component';


@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrl: './projectcard.component.css'
})
export class ProjectcardComponent implements OnInit {

  @Input() project= {} as project;


  
constructor( public dialog: MatDialog ){

}

  ngOnInit(): void {
   
  
  }
  openProjectModal(){

    


   
    let dialogRef = this.dialog.open(ProjectModalViewComponent, {
      width: '100vw',
      maxWidth: '100vw',
    });

    // this.dialog.open(ProjectModalViewComponent, {
    //   width: '250px',
    //   data: { /* pass data if needed */ }
    // });
  }

//   openDialog() {
//     const dialogRef = this.dialog.open(DialogAppComponent, {
//  height: '40%',
//   width: '60%'
//     });


//   }

}
  



