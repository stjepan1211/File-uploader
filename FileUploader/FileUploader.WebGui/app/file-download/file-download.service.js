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
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var DownloadService = DownloadService_1 = (function () {
    function DownloadService(http) {
        this.http = http;
    }
    DownloadService.prototype.getAll = function () {
        return this.http.get(DownloadService_1.baseUrl + 'getAllFiles')
            .toPromise()
            .then(function (res) { return res.json(); }, function (error) {
            throw error;
        });
    };
    DownloadService.prototype.getById = function (id) {
        return this.http.get(DownloadService_1.baseUrl + id.toString() + '/download')
            .toPromise();
    };
    DownloadService.prototype.getPaginated = function (pageNumber, pageSize, sortField, sortDirection) {
        var params = new URLSearchParams();
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
        return this.http.get(DownloadService_1.baseUrl + 'getAllFiles', encodeURIComponent(json))
            .toPromise()
            .then(function (res) { return res.json(); }, function (error) {
            throw error;
        });
    };
    return DownloadService;
}());
DownloadService.baseUrl = window.GlobalVariables.FileUploaderWebAPI;
DownloadService = DownloadService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DownloadService);
exports.DownloadService = DownloadService;
var DownloadService_1;
//# sourceMappingURL=file-download.service.js.map