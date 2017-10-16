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
var signalR_service_1 = require("../signalR/signalR.service");
var upload_document_process_service_1 = require("../signalr/upload-document-process.service");
// decorator section comprised of selector and view template  
var ClockComponent = (function () {
    // constructor of the class to inject the service in the constuctor and call events.  
    function ClockComponent(_signalRService, _ngZone, uploadDocumentProcessService) {
        this._signalRService = _signalRService;
        this._ngZone = _ngZone;
        this.uploadDocumentProcessService = uploadDocumentProcessService;
        // this can subscribe for events  
        this.subscribeToEvents();
        this.subscribeToUploadEvents();
        // this can check for conenction exist or not.  
        this.canSendMessage = _signalRService.connectionExists;
        // this method call every second to tick and respone tansfered to client.  
        //setInterval(() => {
        //    this.uploadDocumentProcessService.getMessage();
        //}, 5000);
    }
    ClockComponent.prototype.subscribeToEvents = function () {
        var _this = this;
        // if connection exists it can call of method.  
        this._signalRService.connectionEstablished.subscribe(function () {
            _this.canSendMessage = true;
        });
        // finally our service method to call when response received from server event and transfer response to some variable to be shwon on the browser.  
        this._signalRService.messageReceived.subscribe(function (message) {
            debugger;
            _this._ngZone.run(function () {
                _this.allMessages = message;
            });
        });
    };
    ClockComponent.prototype.subscribeToUploadEvents = function () {
        var _this = this;
        // if connection exists it can call of method.  
        this.uploadDocumentProcessService.connectionEstablished.subscribe(function () {
            _this.canSendMessage = true;
        });
        // finally our service method to call when response received from server event and transfer response to some variable to be shwon on the browser.  
        this._signalRService.messageReceived.subscribe(function (message) {
            _this._ngZone.run(function () {
                _this.myMessages = message;
            });
        });
    };
    return ClockComponent;
}());
ClockComponent = __decorate([
    core_1.Component({
        selector: 'clock-component',
        template: "\n    <div id=\"timediv\">\n        <p> {{myMessages }}</p>\n    </div> \n  ",
        providers: [upload_document_process_service_1.UploadDocumentProcessService]
    }),
    __metadata("design:paramtypes", [signalR_service_1.SignalRService, core_1.NgZone, upload_document_process_service_1.UploadDocumentProcessService])
], ClockComponent);
exports.ClockComponent = ClockComponent;
//# sourceMappingURL=test.js.map