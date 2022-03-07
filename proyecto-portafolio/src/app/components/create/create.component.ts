import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService],
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string = '';
  public saveproject: any;
  public filestoUpload: Array<File> = [];

  constructor(
    private _projrctservice: ProjectService,
    private _uploadservice: UploadService
  ) {
    this.title = 'Crear proyecto';
    this.project = new Project('', '', '', '', 2022, '', '');
  }

  ngOnInit(): void {}

  onSubmit(form: any) {
    console.log(this.project);
    this._projrctservice.saveProject(this.project).subscribe(
      (response) => {
        if (response.project) {
          this.saveproject = response;

          //subir la imagen
          this._uploadservice.makeFileRequest(Global.url + 'upload_image/' + response.project._id, [], this.filestoUpload, 'image')
          .then((result: any) => {
              this.saveproject = result;
              this.status = 'success';

              //limpiar campos
              form.reset();
            });
        } else {
          this.status = 'failed';
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileinput: any) {
    this.filestoUpload = <Array<File>>fileinput.target.files;
  }
}
