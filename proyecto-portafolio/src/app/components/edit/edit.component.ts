import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService],
})
export class EditComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string = '';
  public saveproject: any;
  public filestoUpload: Array<File> = [];
  public url:string;

  constructor(
    private _projectservice: ProjectService,
    private _uploadservice: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.title = 'Editar proyecto';
    this.project = new Project('', '', '', '', 2022, '', '');
    this.url = Global.url;
   }

   ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id = params['id'];

      this.getProject(id);
    });
  }

  getProject(id:string){
    this._projectservice.getProject(id).subscribe(
       response =>{
          this.project = response.project;
       },
       error =>{
        console.log(<any>error);
       }
    )
  }

  onSubmit(form:any){
    this._projectservice.updateProject(this.project).subscribe(
      response =>{
        if (response.project) {
          //subir la imagen solo cuando files to upload tenga algo
          if(this.filestoUpload.length){
            this._uploadservice.makeFileRequest(Global.url + 'upload_image/' + response.project._id, [], this.filestoUpload, 'image')
            .then((result: any) => {
                this.saveproject = result.project;
                this.status = 'success'; 
              });
          }else{
                this.saveproject = response.project;
                this.status = 'success'; 
          }     
        } else {
          this.status = 'failed';
        }
     },
     error =>{
      console.log(<any>error);
     }
    );
  }

  fileChangeEvent(fileinput: any) {
    this.filestoUpload = <Array<File>>fileinput.target.files;
  }

}
