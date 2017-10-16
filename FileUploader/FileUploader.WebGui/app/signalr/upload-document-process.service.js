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
var UploadDocumentProcessService = (function () {
    function UploadDocumentProcessService() {
        this.proxyName = 'processstatehub';
        this.connectionEstablished = new core_1.EventEmitter();
        this.messageReceived = new core_1.EventEmitter();
        this.connectionExists = false;
        this.connection = $.hubConnection('http://localhost:5736/FileUploader.WebApi/');
        this.proxy = this.connection.createHubProxy(this.proxyName);
        this.registerOnServerEvents();
        this.startConnection();
    }
    UploadDocumentProcessService.prototype.getMessage = function () {
        this.proxy.invoke('ProcessMessage');
    };
    UploadDocumentProcessService.prototype.startConnection = function () {
        var _this = this;
        this.connection.start().done(function (data) {
            console.log('Now connected ' + data.transport.name + ', connection ID= ' + data.id);
            _this.connectionEstablished.emit(true);
            _this.connectionExists = true;
        }).fail(function (error) {
            console.log('Could not connect ' + error);
            _this.connectionEstablished.emit(false);
        });
    };
    UploadDocumentProcessService.prototype.registerOnServerEvents = function () {
        var _this = this;
        this.proxy.on('processMessage', function (data) {
            window.alert(data);
            //console.log('Recieved message from file process: ' + JSON.stringify(data));
            _this.messageReceived.emit(data);
        });
    };
    return UploadDocumentProcessService;
}());
UploadDocumentProcessService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], UploadDocumentProcessService);
exports.UploadDocumentProcessService = UploadDocumentProcessService;
//# sourceMappingURL=upload-document-process.service.js.map