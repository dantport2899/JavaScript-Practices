import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url:string;
  public project!: Project;

  constructor(
    private _proyjectservice: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
   }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id = params['id'];

      this.getProject(id);
    });
  }

  getProject(id:string){
    this._proyjectservice.getProject(id).subscribe(
       response =>{
          this.project = response.project;
       },
       error =>{
        console.log(<any>error);
       }
    )
  }

}
