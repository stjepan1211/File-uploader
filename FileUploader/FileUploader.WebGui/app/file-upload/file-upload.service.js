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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var UploadService = UploadService_1 = (function () {
    function UploadService(http) {
        this.http = http;
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
    UploadService.prototype.postFiles = function (files) {
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append('file[]', files[i]);
        }
        return this.http
            .post(UploadService_1.baseUrl + 'upload', formData)
            .toPromise()
            .then(function (res) { return res.json(); }, function (error) {
            throw error;
        })
            .then(function (data) { return data; });
    };
    return UploadService;
}());
UploadService.baseUrl = window.GlobalVariables.FileUploaderWebAPI;
UploadService = UploadService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UploadService);
exports.UploadService = UploadService;
var UploadService_1;
//# sourceMappingURL=file-upload.service.js.map