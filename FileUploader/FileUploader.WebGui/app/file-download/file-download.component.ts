import { Component, OnInit } from '@angular/core';
import { FileModel } from '../file-model/file-model';
import { DownloadService } from './file-download.service';
import { PagedList } from '../paged-list/paged-list-model';

@Component({
    moduleId: module.id,
    selector: 'file-download',
    templateUrl: 'file-download.html',
    providers: [DownloadService]
})

export class FileDownloadComponent implements OnInit {

    allFiles: PagedList<FileModel>;

    constructor(private downloadService: DownloadService) {

    }

    ngOnInit() {
        this.downloadService.getPaginated(1,5,'originalname', 1)
            .then(
            (response) => {
                    this.allFiles = response;
                }
            )
    }

    downloadFile(fileId: number): void {
        this.downloadService.getById(fileId);
    }
}