"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_upload_service_1 = require("./file-upload.service");
var message_service_1 = require("../message/message.service");
var FileUploadComponent = (function () {
    function FileUploadComponent(uploadService, messageService) {
        this.uploadService = uploadService;
        this.messageService = messageService;
        this.multiple = false;
        this.filesToUpload = [];
    }
    FileUploadComponent.prototype.fileChangeEvent = function (fileInput) {
        var fileCount = fileInput.target.files.length;
        if (fileCount > 0) {
            for (var i = 0; i < fileCount; i++) {
                this.filesToUpload = this.filesToUpload.concat([fileInput.target.files.item(i)]);
            }
        }
    };
    FileUploadComponent.prototype.showSuccess = function () {
        this.messageService.showSuccess('Success!', 'Files uploaded successfully.');
    };
    FileUploadComponent.prototype.showError = function () {
        this.messageService.showSuccess('Error!', 'Error ocured while uploading.');
    };
    FileUploadComponent.prototype.removeFile = function (rowId) {
        this.filesToUpload.splice(rowId, 1);
        this.filesToUpload = this.filesToUpload.slice();
    };
    FileUploadComponent.prototype.resetFilesForUpload = function () {
        this.filesToUpload = [];
    };
    FileUploadComponent.prototype.upload = function () {
        var _this = this;
        this.uploadService.postFiles(this.filesToUpload)
            .then(function () {
            _this.showSuccess();
        }, function (error) {
            _this.showError();
        });
    };
    return FileUploadComponent;
}());
__decorate([
    core_1.ViewChild('fileInput'),
    __metadata("design:type", core_1.ElementRef)
], FileUploadComponent.prototype, "fileInput", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FileUploadComponent.prototype, "multiple", void 0);
FileUploadComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'file-uploader',
        templateUrl: 'file-upload.html',
        providers: [file_upload_service_1.UploadService]
    }),
    __metadata("design:paramtypes", [file_upload_service_1.UploadService, message_service_1.CustomMessageService])
], FileUploadComponent);
exports.FileUploadComponent = FileUploadComponent;
//# sourceMappingURL=file-upload.component.js.map