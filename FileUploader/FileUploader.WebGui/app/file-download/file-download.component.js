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
var file_download_service_1 = require("./file-download.service");
var FileDownloadComponent = (function () {
    function FileDownloadComponent(downloadService) {
        this.downloadService = downloadService;
    }
    FileDownloadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.downloadService.getPaginated(1, 5, 'originalname', 1)
            .then(function (response) {
            _this.allFiles = response;
        });
    };
    FileDownloadComponent.prototype.downloadFile = function (fileId) {
        this.downloadService.getById(fileId);
    };
    return FileDownloadComponent;
}());
FileDownloadComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'file-download',
        templateUrl: 'file-download.html',
        providers: [file_download_service_1.DownloadService]
    }),
    __metadata("design:paramtypes", [file_download_service_1.DownloadService])
], FileDownloadComponent);
exports.FileDownloadComponent = FileDownloadComponent;
//# sourceMappingURL=file-download.component.js.map