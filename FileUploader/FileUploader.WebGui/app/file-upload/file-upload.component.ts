import { Component, ViewChild, Input, ElementRef } from '@angular/core';
import { UploadService } from './file-upload.service';
import { CustomMessageService } from '../message/message.service';
@Component({
    moduleId: module.id,
    selector: 'file-uploader',
    templateUrl: 'file-upload.html',
    providers: [UploadService]
})
export class FileUploadComponent {
    @ViewChild('fileInput') fileInput: ElementRef;
    @Input() multiple: boolean = false;

    filesToUpload: File[] = [];

    constructor(private uploadService: UploadService, private messageService: CustomMessageService) { }

    public fileChangeEvent(fileInput: any) {
        let fileCount: number = fileInput.target.files.length;
        if (fileCount > 0) {
            for (let i = 0; i < fileCount; i++) {
                this.filesToUpload = [...this.filesToUpload, fileInput.target.files.item(i)];
            }
        }
    }

    showSuccess() {
        this.messageService.showSuccess('Success!', 'Files uploaded successfully.');
    }

    showError() {
        this.messageService.showSuccess('Error!', 'Error ocured while uploading.');
    }

    removeFile(rowId: number): void {
        this.filesToUpload.splice(rowId, 1);
        this.filesToUpload = [...this.filesToUpload];
    }

    resetFilesForUpload(): void {
        this.filesToUpload = [];
    }

    upload(): void {
        this.uploadService.postFiles(this.filesToUpload)
            .then(
            () => {
                this.showSuccess();
            },
            (error) => {
                this.showError();
            });
    }

}