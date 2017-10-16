import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { FileModel } from '../file-model/file-model';
import { PagedList } from '../paged-list/paged-list-model';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DownloadService {

    private static readonly baseUrl = (<any>window).GlobalVariables.FileUploaderWebAPI;

    constructor(private http: Http) {

    }

    getAll(): Promise<Array<FileModel>> {
        return this.http.get(DownloadService.baseUrl + 'getAllFiles')
            .toPromise()
            .then(
            (res) => res.json() as Array<FileModel>,
            (error) => {
                throw error;
            });
    }

    getById(id: number): Promise<any> {
        return this.http.get(DownloadService.baseUrl + id.toString() + '/download')
            .toPromise();
    }

    getPaginated(pageNumber: number, pageSize: number, sortField: string, sortDirection: number): Promise<PagedList<FileModel>> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('pageNumber', pageNumber.toString());
        params.set('pageSize', pageSize.toString());
        params.set('sortDirection', sortDirection == -1 ? 'desc' : 'asc');
        params.set('sortField', sortField);

        var json = JSON.stringify({
            page: {
                PageNumber: pageNumber,
                PageSize: pageSize,
                SortDirection: sortDirection,
                SortField: sortField
            }
        });


        return this.http.get(DownloadService.baseUrl + 'getAllFiles', encodeURIComponent(json))
            .toPromise()
            .then(
            (res) => res.json() as PagedList<FileModel>,
            (error) => {
                throw error;
            });
    }
}