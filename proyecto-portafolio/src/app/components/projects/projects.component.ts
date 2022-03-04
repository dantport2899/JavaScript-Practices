import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  constructor(
    private _projectservice: ProjectService
  ) { }

  ngOnInit(): void {
  }

  getProjects(){
    this._projectservice.getProjects().subscribe(
      response =>{
        
      },
      error =>{

      }
    );
  }

}
