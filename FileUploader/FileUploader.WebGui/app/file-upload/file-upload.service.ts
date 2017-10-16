import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { FileModel } from '../file-model/file-model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UploadService {

    private static readonly baseUrl = (<any>window).GlobalVariables.FileUploaderWebAPI;

    constructor(private http: Http) {

    }

    //postFile(file: File, description: string, documentType: string): Promise<FileModel> {
    //    let formData = new FormData();
    //    formData.append("file", file, file.name);

    //    if (description) {
    //        formData.append("description", description);
    //    }

    //    return this.http.post("http://localhost:5736/FileUploader.WebApi/upload" + documentType, formData)
    //        .toPromise()
    //        .then(
    //        (res) => res.json() as FileModel,
    //        (error) => {
    //            throw error;
    //        })
    //        .then(data => { return data; });
    //}

    postFiles(files: File[]): Promise<any>  {
        let formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('file[]', files[i]);
        }
        return this.http
            .post(UploadService.baseUrl + 'upload', formData)
            .toPromise()
            .then(
            (res) => res.json(),
            (error) => {
                throw error;
            })
            .then(data => { return data; });
    }


}