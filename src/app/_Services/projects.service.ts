import { Injectable } from '@angular/core';
import { project } from '../_Models/Project';
import { Tag } from '../_Models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: project[]=[
    {id : 0,name: 'IMMS',summary: 'e-Approval IMMS(Integrated material management system)', description: 'The purpose of Integrated material management system (IMMS) is to ensure that detailed procedure as specified by all labs are follwed in DRDO for procurement of goods and services keeping in view the organization specific requirements. the software service as a common platform for autorities under DRDO for all procurement to ensure efficient, economic, transparant and equitable procedure promoting competiton in accordance with the relevant rules and regulations of DRDO',projectlink: '', pictures: [],tags: [Tag.Angular,Tag.Typescript,Tag.HTML,Tag.CSS,Tag.JAVA]},
    {id : 1,name: 'I`Do',summary: 'I Do Its is a management system', description: ' It is used in our Orgainization ,society ,school,collage etc',projectlink: '', pictures: [],tags: [Tag.Angular,Tag.Typescript,Tag.HTML,Tag.CSS,Tag.javascript,Tag.JAVA]},
    {id : 2,name: 'Distibution of Plex System',summary: 'Analysysis of requiremnt and test case preparation', description: 'Analysysis of requiremnt and test case preparation using Automation Anyware',projectlink: '', pictures: [],tags: [Tag.RPA]}
  
  
]
  constructor() { }
  GetProjects(){
    return this.projects;
  }
  GetprojectByid(id:number):project{
    let project=this.projects.find(project=>project.id===id);
    if(project===undefined){
      throw new TypeError('There is no project that matches the id:'+id)
    }
return project;

  }
}
